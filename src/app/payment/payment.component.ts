import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Payment } from './shared/payment';
import { PaymentService } from './shared/payment.service';
import { StorageService } from '../core/storage/storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: Payment;

  constructor(
    private paymentService: PaymentService,
    private storageService: StorageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.setPayment();
  }

  setPayment(): void {
    this.payment = new Payment();
    this.payment.value = this.getTotal();
  }

  private getTotal(): number {
    let sum = 0;
    this.storageService.get().forEach(p => {
      sum += p.value;
    });
    return sum;
  }

  isFormValid(): boolean {
    const card = this.payment.creditCard;
    return this.isValid(card.number) && this.isValid(card.name) && this.isValid(card.expiration);
  }

  isValid(any: Object): boolean {
    return any != null && any !== '';
  }

  confirmPay(): void {
    this.paymentService.pay(this.payment);
    this.payment = null;
  }

  goBack(): void {
    this.location.back();
  }
}
