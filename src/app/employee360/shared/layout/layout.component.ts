import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  // videoModal = false;
  active = 'test';

  constructor() { }

  notice() {
    alert('Disabled for demo.');
  }

  ngOnInit() {
    // if (this.videoModal) {
    //   $('#videoModal').modal('show');
    //   this.videoModal = true;
    // }
  }

  // let errorCallback = function(e) {
  //   console.log('Reeeejected!', e);
  // };

  // Not showing vendor prefixes.
  // navigator.getUserMedia({ video: true, audio: true }, function(localMediaStream) {
  //   let video = document.querySelector('video');
  //   video.src = window.URL.createObjectURL(localMediaStream);
  //
  //   // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
  //   // See crbug.com/110938.
  //   video.onloadedmetadata = function(e) {
  //     // Ready to go. Do some stuff.
  //   };
  // }, errorCallback);

}
