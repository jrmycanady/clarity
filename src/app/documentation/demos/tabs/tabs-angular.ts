/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

const EXAMPLE = `
<clr-tabs (clrTabsCurrentTabLinkChanged)="onTabSelected($event)"
          (clrTabsCurrentTabIndexChanged)="onTabIndexChanged($event)"
          (clrTabsCurrentTabContentChanged)="onTabContentActivated($event)">
    <clr-tab-link [clrTabLinkId]="'link1'" [clrTabLinkActive]="true">Dashboard</clr-tab-link>
    <clr-tab-link>Management</clr-tab-link>
    <clr-tab-link>Cloud</clr-tab-link>

    <clr-tab-content [clrTabContentId]="'content1'" [clrTabContentActive]="true">
        <p>Content for Dashboard tab. Here is a <a href="javascript://">link</a> that can be accessed via clicking
            or through keyboard via tabbing.</p>
    </clr-tab-content>
    <clr-tab-content>
        <p>Content for Management tab.</p>
    </clr-tab-content>
    <clr-tab-content>
        <p>Content for Cloud tab.</p>
    </clr-tab-content>
</clr-tabs>
`;

@Component({
    selector: "clr-modal-tabs-angular",
    templateUrl: "./tabs-angular.demo.html"
})
export class TabsAngularDemo {
    example = EXAMPLE;
}
