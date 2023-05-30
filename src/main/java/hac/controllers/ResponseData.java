package hac.controllers;



/**
 * we define a class that will be used to transfer specific responses from the server to the client
 */
public class ResponseData extends Throwable {

    private String text;
    private int status;

    public ResponseData(String text) {
        this.setText(text);
    }

    public String getText() {
        return text;
    }

    public int getStatus(){return status;}
    public void setStatus(int num){status = num;}
    public void setText(String text) {
        this.text = text;
    }
}

