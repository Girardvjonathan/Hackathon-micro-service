import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  closeResult: string;
  nCartItems = 2;
  items = [
  	{"name": "vel", "price": "$192.47", "qty": 59},
  	{"name": "Mauris nulla. Integer urna.", "price": "$31.40", "qty": 22},
  	{"name": "quam. Curabitur", "price": "$38.74", "qty": 28},
  	{"name": "metus. Aliquam erat volutpat.", "price": "$156.97", "qty": 60},
  	{"name": "arcu. Aliquam ultrices", "price": "$372.58", "qty": 43},
  	{"name": "vestibulum.", "price": "$24.07", "qty": 1},
  	{"name": "quam quis", "price": "$253.17", "qty": 38},
  	{"name": "fringilla est. Mauris eu", "price": "$46.53", "qty": 91},
  	{"name": "velit. Aliquam nisl.", "price": "$73.72", "qty": 8},
  	{"name": "urna suscipit nonummy.", "price": "$264.64", "qty": 45},
  	{"name": "libero.", "price": "$319.11", "qty": 96},
  	{"name": "rutrum. Fusce dolor", "price": "$394.48", "qty": 19},
  	{"name": "adipiscing", "price": "$153.99", "qty": 8},
  	{"name": "auctor odio", "price": "$136.82", "qty": 84},
  	{"name": "adipiscing elit.", "price": "$158.62", "qty": 72},
  	{"name": "ante bibendum", "price": "$164.05", "qty": 70},
  	{"name": "Nullam", "price": "$171.77", "qty": 97},
  	{"name": "ipsum.", "price": "$227.57", "qty": 92},
  	{"name": "in magna. Phasellus", "price": "$91.22", "qty": 82},
  	{"name": "Curabitur vel lectus.", "price": "$370.63", "qty": 57},
  	{"name": "ultrices.", "price": "$169.03", "qty": 7},
  	{"name": "orci luctus et ultrices", "price": "$84.35", "qty": 46},
  	{"name": "nibh", "price": "$60.48", "qty": 78},
  	{"name": "erat, in consectetuer ipsum", "price": "$270.66", "qty": 100},
  	{"name": "lobortis quis, pede.", "price": "$36.78", "qty": 69},
  	{"name": "mattis semper,", "price": "$89.36", "qty": 76},
  	{"name": "ante lectus convallis", "price": "$282.73", "qty": 23},
  	{"name": "In lorem. Donec elementum,", "price": "$297.77", "qty": 95},
  	{"name": "Cum sociis natoque", "price": "$349.85", "qty": 32},
  	{"name": "elit pede, malesuada", "price": "$309.42", "qty": 58},
  	{"name": "dolor elit,", "price": "$238.67", "qty": 32},
  	{"name": "pede", "price": "$57.26", "qty": 46},
  	{"name": "augue scelerisque mollis. Phasellus", "price": "$182.84", "qty": 16},
  	{"name": "hendrerit a, arcu. Sed", "price": "$30.19", "qty": 14},
  	{"name": "tincidunt pede ac", "price": "$19.48", "qty": 67},
  	{"name": "risus, at fringilla", "price": "$325.14", "qty": 68},
  	{"name": "Etiam laoreet,", "price": "$61.01", "qty": 31},
  	{"name": "convallis in, cursus et,", "price": "$30.27", "qty": 96},
  	{"name": "gravida sit amet, dapibus", "price": "$349.57", "qty": 42},
  	{"name": "fermentum", "price": "$78.31", "qty": 49},
  	{"name": "eget magna.", "price": "$212.04", "qty": 37},
  	{"name": "tellus. Suspendisse", "price": "$254.12", "qty": 20},
  	{"name": "Donec est mauris, rhoncus", "price": "$175.80", "qty": 27},
  	{"name": "nascetur", "price": "$326.43", "qty": 7},
  	{"name": "gravida", "price": "$105.76", "qty": 76},
  	{"name": "dui. Cras pellentesque. Sed", "price": "$50.61", "qty": 34},
  	{"name": "augue eu", "price": "$314.61", "qty": 83},
  	{"name": "interdum enim non", "price": "$57.41", "qty": 28},
  	{"name": "Donec", "price": "$97.72", "qty": 78},
  	{"name": "diam", "price": "$263.11", "qty": 16},
  	{"name": "tellus. Suspendisse", "price": "$351.29", "qty": 93},
  	{"name": "faucibus lectus,", "price": "$390.57", "qty": 11},
  	{"name": "dolor", "price": "$131.87", "qty": 52},
  	{"name": "parturient montes, nascetur ridiculus", "price": "$166.05", "qty": 6},
  	{"name": "Sed", "price": "$261.78", "qty": 98},
  	{"name": "ac", "price": "$60.00", "qty": 96},
  	{"name": "mi fringilla mi lacinia", "price": "$239.48", "qty": 86},
  	{"name": "eget metus. In", "price": "$239.79", "qty": 82},
  	{"name": "In faucibus. Morbi", "price": "$76.52", "qty": 29},
  	{"name": "egestas rhoncus.", "price": "$316.95", "qty": 100},
  	{"name": "scelerisque", "price": "$213.29", "qty": 13},
  	{"name": "vitae odio sagittis", "price": "$286.68", "qty": 15},
  	{"name": "lorem lorem, luctus", "price": "$247.90", "qty": 7},
  	{"name": "eu tempor erat", "price": "$9.18", "qty": 78},
  	{"name": "ipsum cursus", "price": "$271.62", "qty": 61},
  	{"name": "Sed", "price": "$193.33", "qty": 57},
  	{"name": "interdum. Curabitur dictum.", "price": "$289.67", "qty": 98},
  	{"name": "ultrices iaculis odio.", "price": "$248.52", "qty": 23},
  	{"name": "Cras vulputate", "price": "$151.38", "qty": 40},
  	{"name": "pretium aliquet, metus", "price": "$391.87", "qty": 66},
  	{"name": "sit", "price": "$62.48", "qty": 84},
  	{"name": "leo. Morbi", "price": "$204.86", "qty": 48},
  	{"name": "mi eleifend", "price": "$264.81", "qty": 50},
  	{"name": "cursus", "price": "$319.87", "qty": 39},
  	{"name": "est, mollis", "price": "$175.65", "qty": 39},
  	{"name": "augue malesuada malesuada.", "price": "$289.23", "qty": 61},
  	{"name": "Quisque libero", "price": "$86.05", "qty": 4},
  	{"name": "Donec tincidunt.", "price": "$204.03", "qty": 33},
  	{"name": "at", "price": "$201.05", "qty": 41},
  	{"name": "Integer urna. Vivamus molestie", "price": "$76.52", "qty": 32},
  	{"name": "ut mi.", "price": "$392.91", "qty": 62},
  	{"name": "mauris,", "price": "$166.42", "qty": 53},
  	{"name": "eget, dictum placerat, augue.", "price": "$373.39", "qty": 33},
  	{"name": "ridiculus", "price": "$166.52", "qty": 90},
  	{"name": "sed dolor.", "price": "$379.64", "qty": 53},
  	{"name": "metus.", "price": "$279.14", "qty": 44},
  	{"name": "magna. Lorem", "price": "$256.07", "qty": 97},
  	{"name": "sit amet,", "price": "$76.03", "qty": 42},
  	{"name": "magna. Duis", "price": "$308.85", "qty": 24},
  	{"name": "ultricies adipiscing, enim mi", "price": "$389.17", "qty": 5},
  	{"name": "sodales. Mauris blandit", "price": "$370.15", "qty": 9},
  	{"name": "ut, pellentesque eget,", "price": "$219.32", "qty": 93},
  	{"name": "enim, condimentum eget, volutpat", "price": "$281.51", "qty": 26},
  	{"name": "euismod urna. Nullam lobortis", "price": "$185.29", "qty": 78},
  	{"name": "augue scelerisque", "price": "$132.08", "qty": 25},
  	{"name": "pellentesque a, facilisis", "price": "$121.57", "qty": 11},
  	{"name": "vestibulum nec, euismod in,", "price": "$65.82", "qty": 78},
  	{"name": "facilisis, magna tellus", "price": "$180.18", "qty": 19},
  	{"name": "ut dolor", "price": "$253.27", "qty": 48},
  	{"name": "felis. Donec tempor, est", "price": "$43.72", "qty": 42}
  ];

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
  }
}
