import { Component, AfterViewInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-wellbeing-udemy-course-detail',
  templateUrl: './wellbeing-udemy-course-detail.component.html',
  styleUrls: ['./wellbeing-udemy-course-detail.component.css']
})
export class WellbeingUdemyCourseDetailComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {

    $(function() {
      var acc = $("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
          this.classList.toggle("active");
          var panel1 = this.nextElementSibling;
          if (panel1.style.maxHeight) {
            panel1.style.maxHeight = null;
          } else {
            panel1.style.maxHeight = panel1.scrollHeight + "px";
          }
        }
      }

      $('.collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
      }).on('hidden.bs.collapse', function() {
        $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
      });
      $("#example-one").on("click", function() {
        var el = $(this);
        el.text() == el.data("text-swap")
          ? el.text(el.data("text-original"))
          : el.text(el.data("text-swap"));
      });
    });


  }

}
