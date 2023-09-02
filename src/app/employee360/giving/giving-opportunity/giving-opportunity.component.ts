import {
  ViewChild,
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd
} from '@angular/router';
import {
  GivingService
} from '../../_services/giving.service';
import {
  UserService
} from '../../_services/user.service';

import { timer } from 'rxjs';
declare let $: any;

@Component({
  selector: 'app-giving-opportunity',
  templateUrl: './giving-opportunity.component.html',
  styleUrls: ['./giving-opportunity.component.css'],
  providers: [GivingService, UserService]
})
export class GivingOpportunityComponent implements OnInit, AfterViewInit {
  @ViewChild('mainImage') mainImage;
  @ViewChild('givingImage') givingImage;
  @ViewChild('skillsList') skillsList;
  @ViewChild('associatesList') associatesList;
  parameterSubscription;
  id: string = '';
  opportunity: any = {
    createUser: '',
    name: '',
    description: '',
    summary: '',
    tags: [],
    skills: [],
    associates: []
  };
  loading: boolean = true;
  userId: string = '';
  lastSave: string = '{}';
  editableFields = [
    'name', 'summary', 'description', 'backgroundImageUrl',
    'locationName', 'locationAddress', 'locationCity', 'locationState',
    'locationZIP', 'startDate', 'endDate', 'contactFullName', 'contactEmail',
    'contactPhone',
    'contactFacebook', 'contactTwitter', 'contactInstagram', 'status',
    'dashboardImageUrl',
    'featured', 'dashboard', 'order', 'type', 'donationTarget',
    'donationMatchLimit',
    'rewardPoints', 'bankAccountNumber', 'bankName', 'bankRoutingNumber',
    'commentsAllowedBy',
    'associatesLocked'
  ];
  dateFields = [
    'startDate', 'endDate'
  ];
  jsonFields = [
    'skills', 'associates'
  ];
  fileList: any[] = [];
  userSuggestions: string[] = [];
  isAdmin: boolean = false;
  bhusers: any = null;

  constructor(private router: Router, private service: GivingService,
    private route: ActivatedRoute,
    private users: UserService) {
    // go to anchor tags
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          // you can use DomAdapter
          const element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView(true);
            document.body.scrollTop -= 170;
          }
        }
      }
    });

    var me = this;
    let timerSub = timer(1000, 4000);
    timerSub.subscribe(function(t) {
      me.saveChanges()
    });
  }

  resetForm() {
    this.service.delete(this.id)
      .subscribe(res => {
        this.loadDraft();
      });
  }

  ngOnInit() {
    this.loading = true;
    let user = sessionStorage.getItem('currentUser') || '';
    var currentUser = JSON.parse(user);
     if (currentUser.permissions.indexOf('admin') !== -1)
      this.isAdmin = true;

    this.userId = currentUser.id;
    this.parameterSubscription = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.id = params['id'];
        this.reloadData();
      } else {
        this.id = '';
        this.loadDraft();
      }
    });
  }
  ngAfterViewInit() {
    this.users.getUserEmailList().subscribe((res:any) => {
      this.userSuggestions = res;
      var local_bh = new window['Bloodhound']({
        initialize: false,
        local: this.userSuggestions,
        datumTokenizer: window['Bloodhound'].tokenizers.whitespace,
        queryTokenizer: window['Bloodhound'].tokenizers.whitespace
      });
      this.bhusers = local_bh;
      local_bh.initialize();

      $(this.associatesList.nativeElement).tagsinput({
        typeaheadjs: {
          source: local_bh.ttAdapter()
        }
      });
      //(change)="updateTagsField('tags', $event)"
      var me = this;
      $(this.associatesList.nativeElement).on('itemAdded', function(event) {
        if (me.loading)
          return;
        me.updateTagsField('associates', event);
      });
      $(this.associatesList.nativeElement).on('itemRemoved', function(
        event) {
        if (me.loading)
          return;
        me.updateTagsField('associates', event);
      });


      //setdata here as it was skipped until this was done
      this.setData(this.opportunity, true);

      me.saveChanges();
    });

    var me = this;
    $(this.skillsList.nativeElement).tagsinput();
    $(this.skillsList.nativeElement).on('itemAdded', function(event) {
      if (me.loading)
        return;
      me.updateTagsField('skills', event);
    });
    $(this.skillsList.nativeElement).on('itemRemoved', function(event) {
      if (me.loading)
        return;
      me.updateTagsField('skills', event);
    });
  }
  isWritable() {
    if (this.userId === this.opportunity.createUser)
      return true;

    if (this.isAdmin)
      return true;
    return false;
  }
  eventTypeCheckedIcon(type) {
    if (this.opportunity.type === 'fundRaiser') {
      if (type === 'fundRaiser')
        return 'fa-check-square-o';
    }
    if (this.opportunity.type === 'volunteerOpportunity') {
      if (type === 'volunteerOpportunity')
        return 'fa-check-square-o';
    }

    return 'fa-square-o';
  }
  otherAssociatesAllowed() {
    if (this.opportunity.associatesLocked) {
      return 'fa fa-check-square-o';
    }
    return 'fa fa-square-o';
  }
  getViewRoute() {
    return '/giving/' + this.opportunity._id;
  }
  setType(newType) {
    this.opportunity.type = newType;
    this.saveChanges();
  }
  updateFormField(field, event, checkbox?) {

    if (this.dateFields.indexOf(field) !== -1) {
      var newDate: any = Date.parse($(event.target).val());
      if (Number.isNaN(newDate)) return;
      if (newDate === '') return;
      this.opportunity[field] = new Date(newDate).toISOString();
      //event.target.value = this.format(this.opportunity[field]);
      return;
    }
    if (checkbox) {
      this.opportunity[field] = event.target.checked;
      return;
    }
    this.opportunity[field] = event.target.value;
    //  this.saveChanges();
  }
  format(inputDate) {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      var day = date.getDate().toString();
      var month = (date.getMonth() + 1).toString();
      // Months use 0 index.

      return date.getFullYear() + '-' +
        (month[1] ? month : '0' + month[0]) + '-' +
        (day[1] ? day : '0' + day[0]);
    }

    return '';
  }
  updateTagsField(field, event) {
    this.opportunity[field] = event.target.value.split(',');
    this.saveChanges();
  }
  updateUsersField(field, event) {
    this.opportunity[field] = $(event.target).tagsinput('items');
    this.saveChanges();
  }
  isDraft() {
    if (this.opportunity.status === 'draft')
      return true;
    return false;
  }
  isNotDraft() {
    return !this.isDraft();
  }
  loadDraft() {
    this.service.loadDrafts(this.userId)
      .subscribe(res => {
        if (res.length > 0) {
          this.setData(res[0]);
          this.service.fileList(this.id)
            .subscribe(fRes => {
              this.setFileList(fRes);
            });
          return;
        }

        this.addDraft()
          .subscribe(res => {
            this.setData(res);
            this.setFileList([]);
            return;
          });
      });
  }
  setData(data ? , forceUpdate ? ) {
    var me = this;
    if (data) {
      if (data.associates !== undefined)
        if (me.bhusers)
          if ((data.associates.join(',') !== this.opportunity.associates.join(
              ',')) ||
            forceUpdate) {
            $(this.associatesList.nativeElement).tagsinput('removeAll');
            for (var c = 0, l = data.associates.length; c < l; c++)
              $(this.associatesList.nativeElement).tagsinput('add', data.associates[
                c]);

          }

      if (data.skills !== undefined)
        if (data.skills.join(',') !== this.opportunity.skills.join(',')) {
          $(this.skillsList.nativeElement).tagsinput('removeAll');
          for (var c = 0, l = data.skills.length; c < l; c++)
            $(this.skillsList.nativeElement).tagsinput('add', data.skills[c]);
        }
      this.opportunity = data;
    }
    this.id = this.opportunity._id;
    this.lastSave = JSON.stringify(this.opportunity);

    setTimeout(function() {
      me.loading = false;
    }, 1);
  }
  setFileList(data) {
    this.fileList = data;
  }
  reloadData() {
    if (this.id === '')
      return;

    this.service.get(this.id)
      .subscribe(gRes => {
        this.setData(gRes);
        this.service.fileList(this.id)
          .subscribe(fRes => {
            this.setFileList(fRes);
          });
      });

  }
  backgroundURL(opp) {
    if (!opp.backgroundImageUrl || opp.backgroundImageUrl === '')
      return '/assets/img/giving/nothingattached.png';

    if (!opp._id)
      return '';
    return 'https://s3.amazonaws.com/imminent/oahu/' + opp._id + '/' +
      opp.backgroundImageUrl;
  }
  isLoading() {
    return this.loading;
  }
  addShift() {
    var newShift = {
      name: '',
      startTime: '',
      endTime: '',
      date: '',
      spots: "1",
      hours: "0",
      participants: {}
    };

    this.opportunity.availableShifts.unshift(newShift);
    this.saveChanges();
  }
  addDraft() {
    var opportunity: any = {};
    opportunity.type = 'fundRaiser';
    opportunity.name = '';
    opportunity.description = '';
    opportunity.summary = '';
    opportunity.backgroundImageUrl = '';
    opportunity.searchImageUrl = "";
    opportunity.featureImageUrl = "";
    opportunity.startDate = "";
    opportunity.endDate = "";
    opportunity.tags = [];
    opportunity.status = "draft";
    opportunity.causeNPONotFound = true;
    opportunity.causeNPO = '';

    opportunity.causeMediaUrl = '';
    opportunity.causeMediaContentType = '';
    opportunity.locationName = '';
    opportunity.locationAddress = '';
    opportunity.locationCity = '';
    opportunity.locationState = '';

    opportunity.locationZIP = '';
    opportunity.availableShifts = [];
    opportunity.associates = [];
    opportunity.associatesLocked = false;
    opportunity.commentsAllowedBy = 'commentAnyone';

    opportunity.amountOfFundsNeeded = '';
    opportunity.accountInformation = {};
    opportunity.participants = [];
    opportunity.metaData = {};
    opportunity.comments = [];
    opportunity.skills = [];
    opportunity.donations = {};

    opportunity.contactFullName = '';
    opportunity.contactEmail = '';
    opportunity.contactPhone = '';
    opportunity.contactFacebook = '';
    opportunity.contactTwitter = '';
    opportunity.contactInstagram = '';

    opportunity.dashboardImageUrl = '';
    opportunity.featured = false;
    opportunity.dashboard = false;
    opportunity.order = '';

    opportunity.bankAccountNumber = '';
    opportunity.bankName = '';
    opportunity.bankRoutingNumber = '';
    opportunity.donationTarget = '10000';
    opportunity.rewardPoints = '10';

    return this.service.create(opportunity);
  }
  uploadFile(id, fileSelect, setToBackground) {
    var me = this;
    var formData = new FormData();
    formData.append('uploadfile', fileSelect.files[0]);
    var fileName = fileSelect.files[0].name;
    var url = 'http://localhost/api/giving/events/' + id + '/files/' +
      fileName;
      let user = sessionStorage.getItem('currentUser') || '';
      var currentUser = JSON.parse(user);
    $.ajax({
      url: url,
      type: 'post',
      data: formData,
      headers: {
        'Accept': 'application/json',
        'Authorization': currentUser.token
      },
      xhr: function() {
        var xhr = $.ajaxSettings.xhr();
        if (xhr.upload) {}
        return xhr;
      },
      async: true,
      dataType: 'json',
      success: function(data) {
        if (setToBackground) {
          me.opportunity.backgroundImageUrl = fileSelect.files[0].name;
          me.saveChanges();
        }

        //refresh file list
        me.service.fileList(me.id)
          .subscribe(fRes => {
            me.setFileList(fRes);
          });
      },
      error: function(xhr, ajaxoptions, msg) {
        alert(xhr.status + ' ' + msg);
      },
      cache: false,
      contentType: false,
      processData: false
    }, 'json');
  }
  openImageDialog() {
    this.mainImage.nativeElement.click();
  }
  addFileToEvent() {
    this.givingImage.nativeElement.click();
  }
  uploadImageHandler() {
    this.uploadFile(this.id, this.mainImage.nativeElement, true);
  }
  uploadGivingImageHandler() {
    this.uploadFile(this.id, this.givingImage.nativeElement, false);
  }
  saveChanges() {
    if (this.loading)
      return;
    this.opportunity._id = this.id;

    var memoryCache = JSON.parse(this.lastSave);

    var changes = {};
    for (var c = 0, l = this.editableFields.length; c < l; c++) {
      var key = this.editableFields[c];
      if (memoryCache[key] !== this.opportunity[key])
        changes[key] = this.opportunity[key];
    }
    for (var c = 0, l = this.jsonFields.length; c < l; c++) {
      var key = this.jsonFields[c];
      if (JSON.stringify(memoryCache[key]) !== JSON.stringify(this.opportunity[
          key]))
        changes[key] = this.opportunity[key];
    }

    //test the shifts
    if (JSON.stringify(memoryCache.availableShifts) !== JSON.stringify(this.opportunity
        .availableShifts))
      changes['availableShifts'] = this.opportunity.availableShifts;

    if (Object.keys(changes).length > 0) {
      console.log('giving changes saved', changes);
      this.service.update(this.id, changes)
        .subscribe(res => {
          var newObj = res.result;
          for (var c = 0, l = this.editableFields.length; c < l; c++) {
            var key = this.editableFields[c];
            if (newObj[key] !== this.opportunity[key])
              if (changes[key] === undefined)
                this.opportunity[key] = newObj[key];
          }
          this.setData();
        });
    }
  }
  deleteShift(shiftIndex) {
    this.opportunity.availableShifts.splice(shiftIndex, 1);
    this.saveChanges();
  }
  deleteFile(fileKey) {
    var key = fileKey.substr(37);

    if (key === this.opportunity.backgroundImageUrl) {
      if (!confirm(
          'This is the main image, are you sure you want to delete this?')) {
        return;
      }
    }

    this.service.deleteFile(this.id, key)
      .subscribe(gRes => {
        //refresh file list
        this.service.fileList(this.id)
          .subscribe(fRes => {
            this.setFileList(fRes);
          });
      });
  }
  updateShiftField(field, shift, event, number ? ) {
    shift[field] = event.target.value;

    if (number) {
      shift[field] = Number(event.target.value);
      if (isNaN(shift[field]))
        shift[field] = 0;
      if (shift[field] < 0)
        shift[field] = 0;
    }

    this.updateShiftHours(shift);
  }
  updateShiftHours(shift) {
    var startHour = Number(shift.startTime.substr(0,2));
    var startMinutes = Number(shift.startTime.substr(3,2));
    var endHour = Number(shift.endTime.substr(0,2));
    var endMinutes = Number(shift.endTime.substr(3,2));
    startHour += (startMinutes / 60.0);
    endHour += (endMinutes / 60.0);

    shift.hours = endHour - startHour;
  }
  submitGivingEvent() {
    this.opportunity.status = 'open';
    this.saveChanges();
    alert('Giving Event Status is now open');

    this.router.navigate(['/giving/' + this.id]);
    //document.body.scrollTop = 0;
  }
  setCommentPermissions(level) {
    this.opportunity.commentsAllowedBy = level;
    this.saveChanges();
  }
  commentPermissionBackground(btn) {
    if (this.opportunity.commentsAllowedBy === btn)
      return "rgb(50,50,50)";
    return '';
  }
}
