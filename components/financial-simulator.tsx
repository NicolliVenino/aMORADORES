"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, CheckCircle, AlertCircle, Sparkles } from "lucide-react"

interface FinancingCalculation {
  amoraDownPayment: number
  amoraMonthlyPayment: number
  amoraSavings: number
  amoraFinalPrice: number
  traditionalDownPayment: number
  traditionalMonthlyPayment: number
  traditionalTotal: number
}

export function FinancialSimulator() {
  const [propertyValue, setPropertyValue] = useState(500000)
  const [monthlyIncome, setMonthlyIncome] = useState(8000)
  const [availableDownPayment, setAvailableDownPayment] = useState(25000)
  const [contractPeriod, setContractPeriod] = useState(36)
  const [calculation, setCalculation] = useState<FinancingCalculation | null>(null)

  const calculateFinancing = () => {
    // aMORA calculations (5% down payment)
    const amoraDownPayment = propertyValue * 0.05
    const remainingForEntry = propertyValue * 0.15 // 15% remaining to complete 20%
    const monthlyToSave = remainingForEntry / contractPeriod
    const amoraMonthlyBase = propertyValue * 0.008 // ~0.8% of property value
    const amoraMonthlyPayment = amoraMonthlyBase + monthlyToSave
    const amoraSavings = monthlyToSave * contractPeriod
    const amoraFinalPrice = amoraDownPayment + amoraMonthlyPayment * contractPeriod + propertyValue * 0.8 // 5% + monthly payments + remaining 80%

    // Traditional financing calculations (20% down, 30 years, 9.5% annual)
    const traditionalDownPayment = propertyValue * 0.2
    const traditionalFinanced = propertyValue - traditionalDownPayment
    const traditionalMonthlyRate = 0.095 / 12
    const traditionalPayments = 30 * 12

    let traditionalMonthlyPayment = 0
    if (traditionalMonthlyRate > 0) {
      traditionalMonthlyPayment =
        (traditionalFinanced * (traditionalMonthlyRate * Math.pow(1 + traditionalMonthlyRate, traditionalPayments))) /
        (Math.pow(1 + traditionalMonthlyRate, traditionalPayments) - 1)
    }
    const traditionalTotal = traditionalDownPayment + traditionalMonthlyPayment * traditionalPayments

    setCalculation({
      amoraDownPayment,
      amoraMonthlyPayment,
      amoraSavings,
      amoraFinalPrice,
      traditionalDownPayment,
      traditionalMonthlyPayment,
      traditionalTotal,
    })
  }

  useEffect(() => {
    calculateFinancing()
  }, [propertyValue, monthlyIncome, availableDownPayment, contractPeriod])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    }).format(value)
  }

  const canAffordAmora = calculation && availableDownPayment >= calculation.amoraDownPayment
  const canAffordTraditional = calculation && availableDownPayment >= calculation.traditionalDownPayment

  return (
    <section id="simulator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-amora-blue/10 text-amora-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Simulador Inteligente</span>
            </div>
            <h2 className="font-heading font-black text-3xl md:text-4xl mb-4">
              Compare: aMORA vs Financiamento Tradicional
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja como o modelo aMORA pode economizar até R$ 40.000 na sua entrada e oferecer muito mais flexibilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Inputs */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-amora-blue" />
                  <span>Seus Dados</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="propertyValue">Valor do Imóvel</Label>
                  <Input
                    id="propertyValue"
                    type="number"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    placeholder="R$ 500.000"
                  />
                </div>

                <div>
                  <Label htmlFor="monthlyIncome">Renda Mensal</Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    placeholder="R$ 8.000"
                  />
                </div>

                <div>
                  <Label htmlFor="availableDownPayment">Valor Disponível para Entrada</Label>
                  <Input
                    id="availableDownPayment"
                    type="number"
                    value={availableDownPayment}
                    onChange={(e) => setAvailableDownPayment(Number(e.target.value))}
                    placeholder="R$ 25.000"
                  />
                </div>

                <div>
                  <Label htmlFor="contractPeriod">Período do Contrato aMORA</Label>
                  <Select value={contractPeriod.toString()} onValueChange={(value) => setContractPeriod(Number(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24">2 anos</SelectItem>
                      <SelectItem value="30">2.5 anos</SelectItem>
                      <SelectItem value="36">3 anos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculateFinancing} className="w-full bg-amora-blue hover:bg-amora-blue/90">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Recalcular
                </Button>
              </CardContent>
            </Card>

            {/* Results Comparison */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* aMORA Model */}
              <Card className={`relative overflow-hidden ${canAffordAmora ? "ring-2 ring-amora-blue" : ""}`}>
                <div className="absolute top-0 right-0 bg-amora-blue text-white px-3 py-1 text-xs font-bold">
                  RECOMENDADO
                </div>
                <CardHeader>
                  <CardTitle className="text-amora-blue">💚 Modelo aMORA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {calculation && (
                    <>
                      <div className="text-center">
                        <div className="text-3xl font-heading font-black text-amora-blue mb-1">
                          {formatCurrency(calculation.amoraFinalPrice)}
                        </div>
                        <p className="text-sm text-muted-foreground">Preço final total</p>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Entrada necessária (5%):</span>
                          <span className="font-bold">{formatCurrency(calculation.amoraDownPayment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pagamento mensal:</span>
                          <span className="font-bold">{formatCurrency(calculation.amoraMonthlyPayment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Valor economizado em {contractPeriod / 12} anos:</span>
                          <span className="font-bold text-amora-blue">{formatCurrency(calculation.amoraSavings)}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Ao final: você terá 20% para comprar!</span>
                        </div>
                        <div className="flex items-center space-x-2 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Flexibilidade total</span>
                        </div>
                        <div className="flex items-center space-x-2 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Zero burocracia</span>
                        </div>
                      </div>

                      {canAffordAmora ? (
                        <Badge className="w-full justify-center bg-green-100 text-green-800 hover:bg-green-100">
                          ✅ Você pode pagar!
                        </Badge>
                      ) : (
                        <Badge variant="destructive" className="w-full justify-center">
                          ❌ Entrada insuficiente
                        </Badge>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Traditional Financing */}
              <Card className="opacity-75">
                <CardHeader>
                  <CardTitle className="text-muted-foreground">🏦 Financiamento Tradicional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {calculation && (
                    <>
                      <div className="text-center">
                        <div className="text-3xl font-heading font-black text-muted-foreground mb-1">
                          {formatCurrency(calculation.traditionalTotal)}
                        </div>
                        <p className="text-sm text-muted-foreground">Preço final total</p>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Entrada necessária (20%):</span>
                          <span className="font-bold">{formatCurrency(calculation.traditionalDownPayment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Parcela mensal:</span>
                          <span className="font-bold">{formatCurrency(calculation.traditionalMonthlyPayment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prazo:</span>
                          <span className="font-bold">30 anos</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">Precisa ter 20% hoje</span>
                        </div>
                        <div className="flex items-center space-x-2 text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">Aprovação bancária rigorosa</span>
                        </div>
                        <div className="flex items-center space-x-2 text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">Compromisso de 30 anos</span>
                        </div>
                      </div>

                      {canAffordTraditional ? (
                        <Badge variant="secondary" className="w-full justify-center">
                          ⚠️ Possível, mas restritivo
                        </Badge>
                      ) : (
                        <Badge variant="destructive" className="w-full justify-center">
                          ❌ Entrada insuficiente
                        </Badge>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {calculation && (
            <Card className="mt-8 bg-amora-purple/5 border-amora-purple/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-heading font-bold text-xl mb-4">💰 Economia com a aMORA</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-2xl font-heading font-black text-amora-blue">
                        {formatCurrency(calculation.traditionalTotal - calculation.amoraFinalPrice)}
                      </div>
                      <p className="text-sm text-muted-foreground">Economia total</p>
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-black text-amora-blue">
                        {formatCurrency(calculation.traditionalDownPayment - calculation.amoraDownPayment)}
                      </div>
                      <p className="text-sm text-muted-foreground">Economia na entrada</p>
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-black text-amora-blue">3 anos</div>
                      <p className="text-sm text-muted-foreground">Para decidir se compra</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
