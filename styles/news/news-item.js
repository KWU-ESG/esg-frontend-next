import styled from "@emotion/styled";
import Link from "next/link";

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5 rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage, author, publishedAt } = article;
  const date = publishedAt.split("T")[0];
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <Link href={url} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="thumbnail" />
            </a>
          </Link>
        </div>
      )}
      <div className="contents">
        <h2>
          <Link href={url} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </Link>
        </h2>
        <p>{description}</p>
        <p>
          {author}
          {date}
        </p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
