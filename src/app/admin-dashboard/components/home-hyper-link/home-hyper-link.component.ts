import { Component, OnInit } from '@angular/core';
  import { HomeHyperlinkService } from 'src/app/admin-dashboard/Services/home-hyperlink.service';
  
  interface HyperLink {
    id?: number;  // Optional id field
    name: string;
    url: string;
  }
@Component({
  selector: 'app-home-hyper-link',
  templateUrl: './home-hyper-link.component.html',
  styleUrls: ['./home-hyper-link.component.css']
})
export class HomeHyperLinkComponent  implements OnInit {
    hyperLinks: HyperLink[] = [];
    newLink: HyperLink = { name: '', url: '' };
  
    constructor(private hyperlinkService: HomeHyperlinkService) {}
  
    ngOnInit() {
      this.loadHyperLinks();
    }
  
    loadHyperLinks() {
      this.hyperlinkService.getHyperLinks().subscribe(links => this.hyperLinks = links);
    }
  
    addLink() {
      if (this.newLink.name && this.newLink.url) {
        this.hyperlinkService.addHyperLink(this.newLink).subscribe(link => {
          this.hyperLinks.push(link);
          this.newLink = { name: '', url: '' };
        });
      }
    }
  
    editLink(index: number) {
      const link = this.hyperLinks[index];
      this.newLink = { ...link };
      this.deleteLink(index);
    }
  
    deleteLink(index: number) {
      const id = this.hyperLinks[index].id;
      if (id != null) {
        this.hyperlinkService.deleteHyperLink(id).subscribe(() => {
          this.hyperLinks.splice(index, 1);
        });
      } else {
        this.hyperLinks.splice(index, 1);
      }
    }
  }
  