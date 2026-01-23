import { FAQ } from "@/src/widgets/FAQ"
import { faqDataHome } from "@/src/features/faq/model/constant"
import HowItGoing from "@/src/widgets/HowItGoing/ui/HowOtGoing"



const DetailPage = () => {
    return (
        <div>
            <HowItGoing/>
            <FAQ faqData={faqDataHome}/>
            
        </div>
    )
}

export default DetailPage