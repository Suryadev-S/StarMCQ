"use client"

import { TrendingUp } from "lucide-react"
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export const description = "A radial chart with text"

type ScoreRadialProps = {
    score: number
    maximumMarks: number
    title?: string
    description?: string
}

// const chartData = [
//     { browser: "safari", visitors: 600, fill: "var(--color-safari)" },
// ]

// const chartConfig = {
//     visitors: {
//         label: "Visitors",
//     },
//     safari: {
//         label: "Safari",
//         color: "var(--chart-2)",
//     },
// } satisfies ChartConfig

export function ChartRadialText({
    score,
    maximumMarks,
    title = "Quiz Score",
    description = "Your performance",
}: ScoreRadialProps) {
    const percentage = (score / maximumMarks) * 100;
    const startAngle = 90
    const endAngle = startAngle - (360 * percentage) / 100
    const chartData = [
        { name: "Score", value: percentage, fill: "var(--chart-2)" },
    ];
    const chartConfig = {
        value: { label: "Score" },
        Score: { label: "Score", color: "var(--chart-2)" },
    } satisfies ChartConfig;
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={startAngle} //top
                        endAngle={endAngle}
                        innerRadius={80}
                        outerRadius={110}
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-muted last:fill-background"
                            polarRadius={[86, 74]}
                        />
                        {/* the colored bar */}
                        <RadialBar dataKey="value" background cornerRadius={10} />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-4xl font-bold"
                                                >
                                                    {score}/{maximumMarks}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    {percentage.toFixed(1)}%
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 leading-none font-medium">
                    Great work! <TrendingUp className="h-4 w-4" />
                </div>
            </CardFooter>
        </Card>
    )
}
