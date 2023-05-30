package hac.controllers.beans;

import java.io.Serializable;

public class Movie implements Serializable{

    private long id;
    private String posterPath;
    private String releaseDate;
    private String title;

    public Movie(long id, String releaseDate, String title,String posterPath) {
        super();
        this.id = id;
        this.releaseDate = releaseDate;
        this.title = title;
        this.posterPath = posterPath;
    }
    public Movie(){}
    public void setId(long id) {
        this.id = id;
    }
    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getTitle() {
       return title;
    }
    public long getId() {
        return id;
    }
    public String getReleaseDate() {
        return releaseDate;
    }
    public String getPosterPath() {return posterPath;}
    public void setPosterPath(String posterPath) {
        this.posterPath = posterPath;
    }
}
