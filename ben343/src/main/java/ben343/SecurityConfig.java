package ben343;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

@Configuration
@EnableWebMvcSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
			.withUser("user").password("password").roles("USER").and()
			.withUser("admin").password("password").roles("ADMIN", "USER");
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/resources/**");
	}
	
	@Bean
	public AuthenticationSuccessHandler successHandler() {
	    SimpleUrlAuthenticationSuccessHandler handler = new SimpleUrlAuthenticationSuccessHandler();
	    handler.setUseReferer(true);
	    handler.setDefaultTargetUrl("/#fifaCup");
	    handler.setAlwaysUseDefaultTargetUrl(true);
	    return handler;
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		.antMatchers("/loginPage.html").permitAll()
		.antMatchers("/views/home/home.html").permitAll()
		.antMatchers("/views/home/parts/skills/skills.html").permitAll()
		.antMatchers("/views/home/parts/projects/ups-projects.html").permitAll()
        .antMatchers("/views/resume/resume.html").permitAll()
        .antMatchers("/views/resume/carousel.html").permitAll()
        .antMatchers("/views/cv/expPro.html").permitAll()
        .antMatchers("/views/privacy/privacy.html").permitAll()
        .antMatchers("/views/error.html").permitAll()
        .antMatchers("/views/fifa/fifaCup.html").authenticated()
        .and().csrf().disable() // Disable CSRF
	    .formLogin()
	    	.loginPage("/login").permitAll()
	    .successHandler(successHandler())
        .and()
        	.httpBasic();
	}
}