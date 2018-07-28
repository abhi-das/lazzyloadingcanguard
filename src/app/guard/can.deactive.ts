import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class CanDeactiveAccount implements CanDeactivate<any> {

  canDeactivate(component: any) {

    // console.log('CanDeactivate - component---',component);
    
    let canDeactive = component.checkDeActive();

    if(!canDeactive) {
      alert('Deactivation: Could not move out from current page until make deactive false  !!');
      return false;
    }

    return true;
  }

}
