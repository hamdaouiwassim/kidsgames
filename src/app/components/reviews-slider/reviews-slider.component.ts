import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-slider',
  templateUrl: './reviews-slider.component.html',
  styleUrls: ['./reviews-slider.component.scss']
})
export class ReviewsSliderComponent implements OnInit {
  currentIndex = 0;
  slideWidth = 100; // Adjust based on your design
  reviews = [
    { text: "This is an amazing product! It changed my life.", author: "Jane Doe", role: "Verified Buyer", rating: 5, avatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' },
    { text: "Excellent service and great support. Highly recommend!", author: "John Smith", role: "Customer", rating: 4, avatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' },
    { text: "A wonderful experience from start to finish.", author: "Emily Johnson", role: "Loyal Customer", rating: 5, avatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' },
    { text: "Fast delivery and top-notch quality.", author: "Michael Brown", role: "Satisfied Buyer", rating: 4, avatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' },
    { text: "I love this product! Will definitely buy again.", author: "Sarah Wilson", role: "Frequent Shopper", rating: 5, avatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' },
    { text: "Outstanding customer service and product.", author: "David Lee", role: "New Customer", rating: 3, avatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' }
    // Add more reviews as needed
  ];

  slides: any[][] = [];

  ngOnInit(): void {
    this.groupReviewsIntoSlides();
  }

  groupReviewsIntoSlides() {
    this.slides = [];
    for (let i = 0; i < this.reviews.length; i += 3) {
      this.slides.push(this.reviews.slice(i, i + 3));
    }
  }

  get translateX(): string {
    return `-${this.currentIndex * this.slideWidth}vw`;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? this.currentIndex + 1 : 0;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }
}
