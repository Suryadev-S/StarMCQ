"use client"

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

type Props = {
    score: number
    maximumMarks: number
}

export function ScoreRadialText({ score, maximumMarks }: Props) {
    const safeMax = Math.max(0, maximumMarks || 0)
    const clampedScore = Math.max(0, Math.min(score || 0, safeMax))
    const percent = safeMax > 0 ? Math.round((clampedScore / safeMax) * 100) : 0

    // Chart data and config follow the shadcn "radial text" pattern.
    const chartData = [{ band: "score", percent, fill: "var(--color-score)" }]

    const chartConfig = {
        percent: { label: "Score %" },
        score: { label: "Score", color: "var(--chart-1)" },
    } satisfies ChartConfig

    return (
        <Card aria-label="Score vs Maximum Marks">
            <CardHeader className="items-center pb-0">
                <CardTitle className="text-pretty">How well did you do?</CardTitle>
                <CardDescription>score vs max. marks</CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
                <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[260px]">
                    <RadialBarChart data={chartData} startAngle={0} endAngle={360} innerRadius={80} outerRadius={110}>
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-muted last:fill-background"
                            polarRadius={[86, 74]}
                        />
                        <RadialBar dataKey="percent" background cornerRadius={10} />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} domain={[0, 100]}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                                <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-4xl font-bold">
                                                    {percent}%
                                                </tspan>
                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground text-sm">
                                                    {clampedScore} / {safeMax}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                    return null
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
