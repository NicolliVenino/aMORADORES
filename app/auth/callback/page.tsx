// app/auth/callback/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallback() {
  const router = useRouter()
  const [status, setStatus] = useState('Processando confirmação...')

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Obter os parâmetros da URL
        const urlParams = new URLSearchParams(window.location.search)
        const accessToken = urlParams.get('access_token')
        const refreshToken = urlParams.get('refresh_token')
        const type = urlParams.get('type')

        console.log('Callback params:', { type, hasAccessToken: !!accessToken })

        if (type === 'signup') {
          setStatus('Confirmando sua conta...')
          
          if (accessToken && refreshToken) {
            // Definir a sessão manualmente
            const { data, error } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken,
            })

            if (error) {
              console.error('Erro ao definir sessão:', error)
              setStatus('Erro ao confirmar conta. Tente fazer login novamente.')
              setTimeout(() => router.push('/login'), 3000)
              return
            }

            console.log('Sessão definida com sucesso:', data)
            setStatus('Conta confirmada com sucesso! Redirecionando...')
            setTimeout(() => router.push('/dashboard'), 2000)
          } else {
            setStatus('Link de confirmação inválido.')
            setTimeout(() => router.push('/login'), 3000)
          }
        } else {
          // Verificar se já temos uma sessão
          const { data: session, error } = await supabase.auth.getSession()
          
          if (error) {
            console.error('Erro ao obter sessão:', error)
            setStatus('Erro de autenticação. Redirecionando para login...')
            setTimeout(() => router.push('/login'), 2000)
          } else if (session.session) {
            setStatus('Logado com sucesso! Redirecionando...')
            setTimeout(() => router.push('/dashboard'), 1000)
          } else {
            setStatus('Nenhuma sessão encontrada. Redirecionando para login...')
            setTimeout(() => router.push('/login'), 2000)
          }
        }
      } catch (error) {
        console.error('Erro no callback:', error)
        setStatus('Erro inesperado. Redirecionando para login...')
        setTimeout(() => router.push('/login'), 3000)
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <h2 className="text-xl font-semibold text-gray-900">{status}</h2>
        <p className="text-gray-600">Aguarde enquanto processamos sua solicitação...</p>
      </div>
    </div>
  )
}