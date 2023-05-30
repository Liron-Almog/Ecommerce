package hac.controllers;

import hac.controllers.beans.Cart;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.SessionScope;

import java.io.Serializable;

@Configuration
public class BeanConfiguration implements Serializable {

    @Bean
    @SessionScope
    public Cart sessionBeanCart () {
        return new Cart();
    }
}
