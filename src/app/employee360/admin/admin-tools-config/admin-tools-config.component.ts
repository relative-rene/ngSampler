import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from '../../_services/settings.service';
declare let $: any;

@Component({
  selector: 'app-admin-tools-config',
  templateUrl: './admin-tools-config.component.html',
  styleUrls: ['./admin-tools-config.component.css'],
  providers: [SettingsService]
})
export class AdminToolsConfigComponent implements OnInit {
  settings: any = {};
  loaded: boolean = false;
  @ViewChild('gertieFile') gertieFile;

  constructor(private service: SettingsService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.list()
      .subscribe(res => {
        this.settings = {};
        var keys = Object.keys(res);
        for (var c = 0, l = keys.length; c < l; c++)
          this.settings[keys[c]] = res[keys[c]].settingsstring;
        this.loaded = true;
      });
  }

  saveSetting(name) {
    this.service.updateSetting(name, this.settings[name])
      .subscribe(res => {
        //do nothing - model is updated already
      });
  }
  updateFormField(field, event) {
    if (this.loaded === false)
      return;
    if (this.settings[field] != event.target.value) {
      this.settings[field] = event.target.value;
      this.saveSetting(field);
    }
  }
  getGertieReset() {
    if (this.settings.adminGertieReset === undefined)
      this.settings.adminGertieReset = '';

    if (this.settings.adminGertieReset === '')
      return 'SELECT';

    return this.settings.adminGertieReset;
  }
  updateGertieReset(value) {
    if (this.loaded === false)
      return;
    this.settings.adminGertieReset = value;
    this.saveSetting('adminGertieReset');
  }
  UploadGertieImagePopup() {
    this.gertieFile.nativeElement.click();
  }
  uploadComplete(data) {
    this.settings.GertiePicture = data.path.directPath;
    this.saveSetting('GertiePicture');
    this.loadData();
  }
  getGERTIEPath() {
    if (!this.settings.GertiePicture)
      return '/assets/img/admin/box.png';

    return this.settings.GertiePicture;
  }
  UploadGertieImage(event) {
    var me = this;
    var formData = new FormData();
    formData.append('uploadfile', this.gertieFile.nativeElement.files[0]);
    var filename = this.gertieFile.nativeElement.files[0].name;

    var url = 'http://localhost/api/settings/file/' + filename;
    let user = sessionStorage.getItem('currentUser') || '';
    let currentUser = JSON.parse(user);
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
        if (xhr.upload) { }
        return xhr;
      },
      async: true,
      dataType: 'json',
      success: function(data) {
        return me.uploadComplete(data);
      },
      error: function(xhr, ajaxoptions, msg) {
        alert(xhr.status + ' ' + msg);
      },
      cache: false,
      contentType: false,
      processData: false
    }, 'json');
  }

}
