"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { user, loading } = useAuth()
  const router = useRouter()

  // Se o usuário já está logado, redireciona para home
  useEffect(() => {
    if (user && !loading) {
      router.replace("/")
    }
  }, [user, loading, router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsSubmitting(true)

    if (!isSupabaseConfigured) {
      setError("Supabase não está configurado. Configure a integração nas configurações do projeto.")
      setIsSubmitting(false)
      return
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError("Email ou senha incorretos")
      } else if (data.user) {
        setSuccess("Login realizado com sucesso! Redirecionando...")
        // O useEffect acima já vai redirecionar quando user for atualizado
      }
    } catch (err) {
      setError("Erro inesperado ao fazer login")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsSubmitting(true)

    if (!isSupabaseConfigured) {
      setError("Supabase não está configurado. Configure a integração nas configurações do projeto.")
      setIsSubmitting(false)
      return
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem")
      setIsSubmitting(false)
      return
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres")
      setIsSubmitting(false)
      return
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        setError(error.message)
      } else {
        setSuccess("Conta criada com sucesso! Verifique seu email para confirmar a conta.")
        setEmail("")
        setPassword("")
        setConfirmPassword("")

        // Voltar automaticamente para login após 5s
        setTimeout(() => {
          setIsLogin(true)
          setSuccess("")
        }, 5000)
      }
    } catch (err) {
      setError("Erro inesperado ao criar conta")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Se já está logado, não mostra a página de login
  if (user && !loading) {
    return null
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-muted-foreground">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="max-w-md w-full space-y-8 p-8">
        {/* Botão para voltar sem fazer login */}
        <div className="flex justify-start">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4" />
              Continuar sem login
            </Button>
          </Link>
        </div>

        <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
          {/* Supabase configuration warning */}
          {!isSupabaseConfigured && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-yellow-800 mb-1">Configuração Necessária</h4>
                  <p className="text-sm text-yellow-700">
                    Para usar a autenticação, configure a integração Supabase nas configurações do projeto (ícone de
                    engrenagem no canto superior direito).
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">🏠</span>
              </div>
            </div>
            <h2 className="text-3xl font-heading font-black text-primary mb-2">
              {isLogin ? "Faça login na sua conta" : "Crie sua conta"}
            </h2>
            <p className="text-muted-foreground">O login é opcional. Você pode navegar livremente pelo site.</p>
          </div>

          <form className="space-y-6" onSubmit={isLogin ? handleLogin : handleRegister}>
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">{success}</div>
            )}

            <div>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                type="password"
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {!isLogin && (
              <div>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  placeholder="Confirme a senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting || !isSupabaseConfigured}
              className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Carregando..." : isLogin ? "Entrar" : "Criar Conta"}
            </Button>
          </form>

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin)
                setError("")
                setSuccess("")
                setEmail("")
                setPassword("")
                setConfirmPassword("")
              }}
              className="text-secondary hover:text-secondary/80 font-medium transition-colors"
            >
              {isLogin ? "Não tem conta? Criar conta" : "Já tem conta? Fazer login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
