
import image from '../assets/news.jpeg';
  const NewsItem = ({ title = "", description = "", src, url }) => {
    const truncatedTitle = title ? title.slice(0, 50) : "";
    const truncatedDescription = description ? description.slice(0, 90) : "News is a report of a current event.It is information about something that has just happened";

    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={src ? src:image} style={{height: "200px", width: "325px"}} className="card-img-top" alt="news" />
            <div className="card-body">
                <h5 className="card-title">{truncatedTitle}</h5>
                <p className="card-text">{truncatedDescription}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
}

export default NewsItem;

  