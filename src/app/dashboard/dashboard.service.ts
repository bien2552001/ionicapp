import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { DTSU666Model } from './dtsu666.model';
import { Pzem017Model } from './pzem017.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  BaseUrl = "http://172.21.96.151:5000"

  constructor(private http: HttpClient) { }
  //---------------------------------------------------------------------------------------------Moment---------------------------------------------------------------------
  //-------------------------------------DTSU66--------------------------------------------------------
  //Biến chung
  dtsu666_ui = 'Ua,Ub,Uc,Uab,Ubc,Uca,Ia,Ib,Ic';
  dtsu666PQPhiMomentFields = 'Pft,Pfa,Pfb,Pfc,Qft,Qfa,Qfb,Qfc,Cosft,Cosfa,Cosfb,Cosfc,Hz';
  dtsu666AMomentFields = 'A_sum,A_imp,A_exp,Q1,Q2,Q3,Q4';
  pzem017UIPAMomentFields = 'U1,I1,P1,A1';


  //Phương thức chung
  DTSU666_Moment(fields: string): Observable<Array<DTSU666Model>> {
    const startDate = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const endDate = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const url = `${this.BaseUrl}/dtsu666?&Fields=${fields}&start=${startDate}&end=${endDate}`;
    return this.http.get<Array<DTSU666Model>>(url);
  }

  PZEM017_Moment(fields: string): Observable<Array<Pzem017Model>> {
    const startDate = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const endDate = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const url = `${this.BaseUrl}/pzem017?&Fields1=${fields}&Start1=${startDate}&End1=${endDate}`;
    return this.http.get<Array<Pzem017Model>>(url);
  }


  //---------------Điện áp pha,Điện áp dây, Dòng điện pha ----------------
  DTSU666_uimoment(): Observable<Array<DTSU666Model>> {
    return this.DTSU666_Moment(this.dtsu666_ui);
  }

  //---------------Công suất theo pha: p,q ; Cosphi ; Hz ----------------
  DTSU666_pqphimoment(): Observable<Array<DTSU666Model>> {
    return this.DTSU666_Moment(this.dtsu666PQPhiMomentFields);
  }

  //-------------Công suất -------------------
  DTSU666_amoment(): Observable<Array<DTSU666Model>> {
    return this.DTSU666_Moment(this.dtsu666AMomentFields);
  }


  //---------------------PZEM-017------------------------------
  Pzem017_uipamoment(): Observable<Array<Pzem017Model>> {
    return this.PZEM017_Moment(this.pzem017UIPAMomentFields);
  }
}
