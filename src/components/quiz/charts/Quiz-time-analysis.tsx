"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

type Props = {
    timeUsedSec: number
    totalDurationSec: number
}

function formatTime(secs: number) {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}:${s.toString().padStart(2, "0")}`
}

export function TimeAnalysis({ timeUsedSec, totalDurationSec }: Props) {
    const safeTotal = Math.max(0, totalDurationSec)
    const used = Math.min(Math.max(0, timeUsedSec), safeTotal)
    const remaining = Math.max(0, safeTotal - used)
    const pct = safeTotal > 0 ? Math.round((used / safeTotal) * 100) : 0

    const data = [
        {
            name: "Time",
            used,
            remaining,
        },
    ]

    const summary = `You finished in ${formatTime(used)} out of ${formatTime(safeTotal)} (${pct}%)`

    return (
        <Card>
            <CardHeader>
                <CardTitle>Time Analysis</CardTitle>
                <CardDescription className="text-pretty">{summary}</CardDescription>
            </CardHeader>
            <CardContent className="relative h-[220px]">
                <ChartContainer
                    config={{
                        used: { label: "Time Used", color: "hsl(var(--chart-1))" },
                        remaining: { label: "Time Remaining", color: "hsl(var(--chart-3))" },
                    }}
                    className="h-full"
                >
                    <BarChart data={data} layout="vertical" margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            type="number"
                            domain={[0, safeTotal || 1]}
                            tickFormatter={(v) => formatTime(Number(v))}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="used" stackId="time" fill="var(--color-used)" radius={[4, 0, 0, 4]} />
                        <Bar dataKey="remaining" stackId="time" fill="var(--color-remaining)" radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ChartContainer>

                <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-medium text-muted-foreground">{pct}%</span>
                </div>
            </CardContent>
        </Card>
    )
}
