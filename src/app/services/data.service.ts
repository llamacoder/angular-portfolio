import { Injectable } from '@angular/core';

import { Project } from '../models/Project';

@Injectable()
export class DataService {
  projects: Project[];

  constructor() {
    this.projects = [
      {
        id: 1,
        title: 'Tracey Made (this site)',
        image: '../../assets/TraceyMadeSite.png',
        skillsHighlight: 'Python, Django, Javascript, HTML, CSS, Heroku, SQLite3, Materialize, Responsive Design',
        info: "A really good long description of Boomtown and the project goes here",
        javascript: true
      },
      {
        id: 2,
        title: 'Boomtown Showcase',
        image: '../../assets/Boomtown.png',
        skillsHighlight: 'Materialize, HTML, CSS, Javascript, jQuery, Responsive Design, Mocha, Chai',
        info: "A really good long description of Boomtown and the project goes here",
        javascript: true
      },
      {
        id: 3,
        title: 'Broken Fence Studios Website',
        image: '../../assets/BFS.png',
        skillsHighlight: 'Photoshop, HTML, CSS, Premiere, Album Design, Video Production, After Effects',
        info: "A really good long description of BFS and the work goes here",
        javascript: false
      },
      {
        id: 4,
        title: 'Promotional Videos',
        image: '../../assets/BFSPromo.png',
        skillsHighlight: 'After Effects, Premiere, Photoshop, Design Skills, Video Production Skills',
        info: "A really good long description of the portfolio project goes here",
        javascript: false
      },
      {
        id: 5,
        title: 'Pixel Art',
        image: '../../assets/PixelArt.png',
        skillsHighlight: 'HTML, CSS, Materialize, GitHub',
        info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        javascript: false
      },
      {
        id: 6,
        title: 'Custom Videos',
        image: '../../assets/GraduationVideo.png',
        skillsHighlight: 'Premiere, After Effects, Photoshop, Design Skills, Video Production Skills',
        info: "A really good long description of the portfolio project goes here",
        javascript: false
      },
      {
        id: 7,
        title: 'Digital Futures Initiative',
        image: '../../assets/DFI.png',
        skillsHighlight: 'Premiere, Video Production, Design',
        info: "A really good long description of the portfolio project goes here",
        javascript: false
      },
      {
        id: 8,
        title: 'Galvanize Delivers',
        image: '../../assets/GalvanizeDelivers.png',
        skillsHighlight: 'HTML, CSS, Materialize, Responsive Design',
        info: "A really good long description of the portfolio project goes here",
        javascript: false
      },
      {
        id: 9,
        title: 'Fairview Band Silent Auction Promo Video',
        image: '../../assets/SilentAuction.png',
        skillsHighlight: 'Premiere, After Effects, Photoshop, Video Production',
        info: "A really good long description of the portfolio project goes here",
        javascript: false
      }
      {
        id: 10,
        title: 'Promotional Album - Hotel Boulderado',
        image: '../../assets/boulderadoHotel.png',
        skillsHighlight: 'Photoshop, Album Design, Design Skills',
        info: "A really good long description of the portfolio project goes here",
        javascript: false
      },
      {
        id: 11,
        title: 'Album Design',
        image: '../../assets/albumDesign.png',
        skillsHighlight: 'Photoshop, Album Design, Design Skills',
        info: "A really good long description of the portfolio project goes here",
        javascript: false
      },
      {
        id: 12,
        title: 'Music Mom Website',
        image: '../../assets/MusicMom.png',
        skillsHighlight: 'HTML, CSS, Photoshop',
        info: "A really good long description of the portfolio project goes here",
        javascript: false
      }
    ];
  }

  getProjects(): Project[] {
    console.log('Fetching projects from service...');
    return this.projects;
  }


}
