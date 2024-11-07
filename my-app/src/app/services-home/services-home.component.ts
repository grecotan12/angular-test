import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-services-home',
  standalone: true,
  imports: [HighlightDirective, NgFor, NgIf, NgSwitch, NgSwitchDefault],
  templateUrl: './services-home.component.html',
  styleUrl: './services-home.component.css'
})

export class ServicesHomeComponent implements OnInit {
  // bankingServices = ['Issue business loans',
  //  'Open new checking and/or saving accounts',
  //  'Help clients with account-related issues such as transfers, withdrawals, and deposits',
  //  'Provide periodic reports and analysis',
  // 'Monitor client accounts and keep information up to date',
  // 'Guide clients through their savings, loan, mortgage, and retirement options',
  //  'Refer customers to loan officers or other financial specialists',
  // 'Resolve debit and credit issues'];
  // bankingServices: any[] = [
  //   {
  //     "type": "Issue business loans",
  //     "years": 2
  //   },
  //   {
  //     "type": "Provide periodic reports and analysis",
  //     "years": 7
  //   },
  //   {
  //     "type": "Open new checking and/or saving accounts",
  //     "years": 5
  //   },
  //   {
  //     "type": "Monitor client accounts and keep information up-to-date",
  //     "years": 3
  //   },
  //   {
  //     "type": "Resolve debit and credit issues",
  //     "years": 2
  //   }
  // ];

  color = '';
  bankingServices: any[] = [
    {
      "type": 'Issue business loans',
      "years": 2,
      "category": "loans"
    },    {
      "type": 'Provide periodic reports and analysis',
      "years": 7,
      "category": "reports"
    },    {
      "type": 'Open new checking and/or saving accounts',
      "years": 5,
      "category": "financial_accounts"
    },    {
      "type": 'Guide clients through their savings, loan, mortgage, and retirement options',
      "years": 6,
      "category":"options"
    }
  ];
  ngOnInit(): void { }
}
