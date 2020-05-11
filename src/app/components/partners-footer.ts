import { Component } from "@angular/core";

@Component({
  selector: "app-partners-footer",
  template: `
    <img src="assets/img/orgs1.png" class="footer-image" />
    <img src="assets/img/orgs2.png" class="footer-image" />
    <p class="footer-text">
      The mark "CDC" is owned by the US Dept of Health and Human Services and is
      used with permission. Use of this logo is not an endorsement by HHS or CDC
      of any particular product, service, or enterprise.
    </p>
    <p class="footer-text">
      Parenting for Lifelong Health is supported by the UKRI GCRF Accelerating
      Achievement for Africa's Adolescents Hub, the European Research Council
      (ERC) under the European Union's Seventh Framework Programme and the
      Horizon 2020 Research and Innovation Programme, Oxford University
      Innovation GCRF Sustainable Impact Fund, UNICEF, the Leverhulme Trust, the
      Economic and Social Research Council, WHO, CIDA, the National Research
      Foundation of South Africa, Ilifa Labantwana, Rand Merchant Bank Fund, the
      ApexHi Charitable Trust, the John Fell Fund, the Evaluation Fund, the UBS
      Optimus Foundation, USAID-PEPFAR, the Wellcome Trust, Grand Challenges
      Canada and Wellspring Advisors.
    </p>
  `,
})
export class PartnersFooterComponent {}
