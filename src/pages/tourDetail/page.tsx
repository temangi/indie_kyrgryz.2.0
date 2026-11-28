import { FAQ } from "@/src/widgets/FAQ"
import HowItGoing from "@/src/widgets/HowItGoing/ui/HowOtGoing"
import { practicalDetails } from "@/src/widgets/HowItGoing/model/tourPractical"

export type Props = {
  slug: string;
};

const DetailPage = ({ slug }: Props) => {
    const faq = practicalDetails(slug)?.faq

    return (
        <div>
            <HowItGoing slug={slug} />
            {faq ? <FAQ faqData={faq}/> : null}
        </div>
    )
}

export default DetailPage