import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent {
  precies = [
    {
      title: 'Free',
      price: 'FREE',
      text: 'forever free for individuals and small teams up to 3',
      list: {
        one: 'Unlimited Access',
        two: '100MB Storage',
        three: '3 Users',
        four: 'Unlimited Tasks',
      },
      button: 'Start for free',
    },
    {
      title: 'Unlimited',
      price: '$29',
      text: 'per user/month billed yearly $39 billed monthly',
      list: {
        one: 'All in Free +',
        two: 'Unlimited Guests',
        three: 'Priority Support',
        four: 'Smart Notifications',
      },
      button: 'Get Unlimited',
    },
    {
      title: 'Enterprise',
      price: '$35',
      text: 'per user/month billed yearly $45 billed monthly',
      list: {
        one: 'All in Unlimited +',
        two: 'Bulk Export',
        three: 'Advanced Analytics',
        four: 'Advanced Security',
      },
      button: 'Get Enterprise',
    },
  ];
}
