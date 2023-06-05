import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { DTSU666Model } from './dtsu666.model';
import { Pzem017Model } from './pzem017.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  //---------------------Thẻ Moment-------------------------
  public dtsu_ngay: Array<DTSU666Model> = [];
  public dtsu1_ngay: Array<DTSU666Model> = [];
  public dtsu2_ngay: Array<DTSU666Model> = [];
  public pzem_ngay: Array<Pzem017Model> = [];

  //---------------------Thẻ To day-------------------------
 
  constructor(private menuservice: DashboardService) { }

  selectedTab: string = 'tab1';

  ngOnInit() {
    //---------------------Thẻ Moment--------------------
    this.DTSU666_ui_moment();
    this.DTSU666_pqphi_moment();
    this.DTSU666_a_moment();
    this.Pzem017_uipa_moment();
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.DTSU666_ui_moment();
      this.DTSU666_pqphi_moment();
      this.DTSU666_a_moment();
      this.Pzem017_uipa_moment();
      event.target.complete();
    }, 5000);
  }
  //---------------------Thẻ Moment--------------------
  DTSU666_ui_moment() {
    this.menuservice.DTSU666_uimoment()
      .subscribe(cs => {
        this.dtsu_ngay = cs;
      });
  }

  DTSU666_pqphi_moment() {
    this.menuservice.DTSU666_pqphimoment()
      .subscribe(cs => {
        this.dtsu1_ngay = cs;
      });
  }

  DTSU666_a_moment() {
    this.menuservice.DTSU666_amoment()
      .subscribe(cs => {
        this.dtsu2_ngay = cs;
      });
  }

  Pzem017_uipa_moment() {
    this.menuservice.Pzem017_uipamoment().subscribe(da => {
      this.pzem_ngay = da;
    })
  }

}
