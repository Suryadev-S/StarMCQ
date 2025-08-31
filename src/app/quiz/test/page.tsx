import { ChartRadialText } from "@/components/quiz/charts/chart-radial-text";

const TestPage = ({ params }: { params: { slug: string } }) => {
    return (
        <div>
            <ChartRadialText score={49}
                maximumMarks={50}
                title="Final Score"
                description="Competitive Mode" />
        </div>
    );
};

export default TestPage;