export const cartRuleVoucher=require('../../fixtures/CartruleVoucher.json')
import Common from "../common";
const helper = new Common();

export class CartruleVoucherPage{

    

    addToBagProduct(){
        helper.assertElementVisibility(cartRuleVoucher.getProductSection)
        helper.scrollIntoView(cartRuleVoucher.getProductSection)
        helper.assertElementVisibility(cartRuleVoucher.getProduct)
        helper.scrollIntoView(cartRuleVoucher.getProduct)
        helper.click(cartRuleVoucher.getProduct)
        helper.click(cartRuleVoucher.getQuickTourButton)
        helper.assertElementVisibility(cartRuleVoucher.addToBagButton)
        helper.click(cartRuleVoucher.addToBagButton)
        helper.assertElementVisibility(cartRuleVoucher.goToBag)
        helper.click(cartRuleVoucher.goToBag)
       
    }

    applyVoucher(){
        helper.assertElementVisibility(cartRuleVoucher.getReedemVoucherBtn)
        helper.click(cartRuleVoucher.getReedemVoucherBtn)
    }

}
export default CartruleVoucherPage;

