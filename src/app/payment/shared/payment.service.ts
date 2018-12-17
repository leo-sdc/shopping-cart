import { Injectable } from '@angular/core';

import { Payment } from './payment';
import { StorageService } from '../../core/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private storageService: StorageService) { }

  public pay(payment: Payment): void {
    console.log(`Payment finished: ${payment.value}`);
    this.storageService.clear();
  }
}
