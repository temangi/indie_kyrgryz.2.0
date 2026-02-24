import { FAQ } from "@/src/widgets/FAQ"
import { faqDataHome } from "@/src/features/faq/model/constant"
import HowItGoing from "@/src/widgets/HowItGoing/ui/HowOtGoing"

export type Props = {
  slug: string;
};

const DetailPage = ({ slug }: Props) => {
    return (
        <div>
            <HowItGoing slug={slug} />
            <FAQ faqData={faqDataHome}/>
        </div>
    )
}

export default DetailPage