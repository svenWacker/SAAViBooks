import React, { useState, useEffect } from "react";

// google icon from react icons
import { SiGoogle } from "react-icons/si";
// stars for rating from react icons
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const BookDetails = ({ bookId }) => {
  bookId = "4JKvDAAAQBAJ"; //temporary for testing

  const [bookData, setBookData] = useState(false);

  useEffect(() => {
    console.log("data");
    fetch("https://www.googleapis.com/books/v1/volumes/" + bookId)
      .then((res) => res.json())
      .then((data) => {
        console.log("Check fetch >>");
        console.log(bookId);
        console.log(data);
        setBookData(data);
      })
      .catch((err) => console.log(`Your had an error in fetch.`));
  }, []);

  console.log("Check outside useEffect >>");
  console.log(bookId);
  console.log(bookData);
  console.log(bookData.volumeInfo);
  // console.log(bookData.volumeInfo.title); //

  // if the API has loaded information successfully (bookData == true) then it will display the whole element, otherwise it will only show the "Please wait" message.
  if (!bookData) {
    return <p>Please wait for the loading of the information. Thank you.</p>;
  } else {
    return (
      <React.Fragment>
        <div className="book-details-container">
          <div className="book-cover-img-container">
            <a href="/book-cover-link" target="_blank">
              <img
                src={
                  bookData.volumeInfo.imageLinks.thumbnail ||
                  bookData.volumeInfo.imageLinks.smallThumbnail
                }
                className="book-cover-img"
                alt="book title's book cover picture"
              />
            </a>
          </div>

          <div className="book-info-container">
            <div className="book-title-author-container">
              <a href={bookData.volumeInfo.previewLink} target="_blank">
                <h2 className="book-title">
                  Book Title {bookData.volumeInfo.title}
                </h2>
              </a>
              <a href={bookData.volumeInfo.previewLink} target="_blank">
                <h3 className="book-author">
                  by {bookData.volumeInfo.authors}
                </h3>
              </a>
            </div>

            <div className="book-ratings-container">
              <div className="google-rating">
                <SiGoogle className="google-icon" />
                <p>
                  {bookData.averageRating
                    ? bookData.volumeInfo.averageRating
                    : "not rated"}
                </p>
              </div>
              <p className="saavi-community-rating">SAAVI Community: </p>
              <div className="saavi-community-ratings-container">
                <p className="saavi-community-rating-stars">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarHalfFill />
                  <RiStarLine />
                </p>
                <p className="saavi-community-rating-number">from 3 ratings</p>
              </div>
            </div>
            <div className="book-small-details-container">
              <div className="book-year-pub">
                published: {bookData.volumeInfo.publishedDate}
              </div>
              <div className="book-series">Books series with number</div>
              <div className="book-lang">
                Edition Language: {bookData.volumeInfo.language}
              </div>
              <div className="book-orig-lang">
                Original Language: {bookData.volumeInfo.language}
              </div>
            </div>
          </div>

          <div className="book-genres">
            Genres: {bookData.volumeInfo.categories}
          </div>

          <div className="book-description">
            Book description:
            <p>{bookData.volumeInfo.description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default BookDetails;

// const x = {
//   kind: "books#volume",
//   id: "4JKvDAAAQBAJ",
//   etag: "e+J6dSrXnoA",
//   selfLink: "https://www.googleapis.com/books/v1/volumes/4JKvDAAAQBAJ",
//   volumeInfo: {
//     title: "Expert Searching in the Google Age",
//     authors: ["Terry Ann Jankowski"],
//     publisher: "Rowman & Littlefield",
//     publishedDate: "2016-08-04",
//     description:
//       "How do expert searchers fit into the Google age? Is there still a role for them? How can you be the best searcher you can be? What tools can you use to develop your skills and build better searches? These questions and more are covered by Jankowski. After making a case for the value librarians can bring to the searching process, whether using Google or other databases, Jankowski takes you through the entire search cycle and offers a glimpse into the future of searching.\u003cbr\u003e How do you negotiate a search so that all parties are satisfied? How do you decide which resources to use and use them to their best advantage? What are the steps to building a good search strategy and how do you adapt and modify it? When the results are in how do you manage the results and document the process? Filled with tips and tricks gathered from over 40 years of experience Jankowski provides the answers in this conversational, yet practical guide. In addition to providing checklists and examples throughout the book, an entire chapter describes search tools and resources to grow your own expertise. Opportunities to apply the knowledge gained are offered in most chapters.\u003cbr\u003eThis compact useful book can be used as a reference text, for self-study or as a course text.",
//     industryIdentifiers: [
//       {
//         type: "ISBN_10",
//         identifier: "1442239662",
//       },
//       {
//         type: "ISBN_13",
//         identifier: "9781442239661",
//       },
//     ],
//     readingModes: {
//       text: true,
//       image: true,
//     },
//     pageCount: 102,
//     printedPageCount: 103,
//     printType: "BOOK",
//     categories: [
//       "Language Arts & Disciplines / Library & Information Science / General",
//     ],
//     averageRating: 4,
//     ratingsCount: 1,
//     maturityRating: "NOT_MATURE",
//     allowAnonLogging: false,
//     contentVersion: "0.3.3.0.preview.3",
//     panelizationSummary: {
//       containsEpubBubbles: false,
//       containsImageBubbles: false,
//     },
//     imageLinks: {
//       smallThumbnail:
//         "http://books.google.com/books/publisher/content?id=4JKvDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE7228YWST2dVS_1tI5W2Arag-vfzm8z-918f4xt8ofgJLoJTK_-hODetFHZxXjyDqtPJhqBadmzhc8CVv_zSlml84G_ZH4kdd2kC6O61zlnd16LvBcnDLUIzzwajocFU3hyPevPF&source=gbs_api",
//       thumbnail:
//         "http://books.google.com/books/publisher/content?id=4JKvDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73yX4qwYixC38FYYqJTxW-zUHaoZloki1yHr8cyaOM0Tq-2ndntsm_WLcJ86XHAOh-miDrwfhQjam-56fES4YgzI9CB_M29BTPMLDW2byj9cK5aBbtoYsSEftHyjNR6RRLX1FdA&source=gbs_api",
//       small:
//         "http://books.google.com/books/publisher/content?id=4JKvDAAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70x3jlzal1vlfsaL_43jT5TaBEpk_utvN1o6r5xQiNIukIkGVIzGFhuyHd4NWGGka4QXqfDpbTDyewruFoGOh7PcldewsHGWkycj91MvW72HeHo7r2DT0NNZaVj2I1ssn-MP_DL&source=gbs_api",
//       medium:
//         "http://books.google.com/books/publisher/content?id=4JKvDAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73Fq9A-Cs_wokyo3K8giH6Rq1W8W0w8WOnG0DCFXnH8Njl4OYO2dMdtpVQ5aF1Kf6fHXcsFFnxQ_NM-caGzrN65kzVpvSYsM61ERcq9kQAqYXDM54lFxoTFaC76LC8mhjhZFnSs&source=gbs_api",
//       large:
//         "http://books.google.com/books/publisher/content?id=4JKvDAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72Iw9i648jiaJiDiJ530dLHmhWyzUPydBZJ5SPf57siufWM8rPEROvWx9qQyIEtUTzwn_BFZo1wcu9tBEgqEcxm1atqyX5IteXnDPl5ymRbyhLsNP64tY-2NWayASuqxFR-X8R8&source=gbs_api",
//       extraLarge:
//         "http://books.google.com/books/publisher/content?id=4JKvDAAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72JfjS9DtHsrCADfrNh_-ZU7IzxnmpfWDeA2E8DhQmoAPT7qZvVL-CblWkutKYfFSj8E_SliLV57zqdPbvj9I8NHN8qbkbgO6QhnYfALRGNjq7MndGFAJiGBTNBjQ2S5Cm9wwvA&source=gbs_api",
//     },
//     language: "en",
//     previewLink:
//       "http://books.google.de/books?id=4JKvDAAAQBAJ&hl=&source=gbs_api",
//     infoLink:
//       "https://play.google.com/store/books/details?id=4JKvDAAAQBAJ&source=gbs_api",
//     canonicalVolumeLink:
//       "https://play.google.com/store/books/details?id=4JKvDAAAQBAJ",
//   },
//   layerInfo: {
//     layers: [
//       {
//         layerId: "geo",
//         volumeAnnotationsVersion: "3",
//       },
//     ],
//   },
//   saleInfo: {
//     country: "DE",
//     saleability: "FOR_SALE",
//     isEbook: true,
//     listPrice: {
//       amount: 44.89,
//       currencyCode: "EUR",
//     },
//     retailPrice: {
//       amount: 32.7,
//       currencyCode: "EUR",
//     },
//     buyLink:
//       "https://play.google.com/store/books/details?id=4JKvDAAAQBAJ&rdid=book-4JKvDAAAQBAJ&rdot=1&source=gbs_api",
//     offers: [
//       {
//         finskyOfferType: 1,
//         listPrice: {
//           amountInMicros: 44890000,
//           currencyCode: "EUR",
//         },
//         retailPrice: {
//           amountInMicros: 32700000,
//           currencyCode: "EUR",
//         },
//         giftable: true,
//       },
//     ],
//   },
//   accessInfo: {
//     country: "DE",
//     viewability: "PARTIAL",
//     embeddable: true,
//     publicDomain: false,
//     textToSpeechPermission: "ALLOWED",
//     epub: {
//       isAvailable: true,
//       acsTokenLink:
//         "http://books.google.de/books/download/Expert_Searching_in_the_Google_Age-sample-epub.acsm?id=4JKvDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
//     },
//     pdf: {
//       isAvailable: true,
//       acsTokenLink:
//         "http://books.google.de/books/download/Expert_Searching_in_the_Google_Age-sample-pdf.acsm?id=4JKvDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
//     },
//     webReaderLink:
//       "http://play.google.com/books/reader?id=4JKvDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
//     accessViewStatus: "SAMPLE",
//     quoteSharingAllowed: false,
//   },
// };
