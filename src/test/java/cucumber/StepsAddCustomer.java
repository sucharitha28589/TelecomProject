package cucumber;

import org.junit.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepsAddCustomer {
	static WebDriver driver;

	@Given("the user is in add customer page")
	public void the_user_is_in_add_customer_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Srini Raju V\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		Thread.sleep(2000);
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//a[text()='Add Customer']")).click();
	}

	@When("the user fill in the valid customer details")
	public void the_user_fill_in_the_valid_customer_details() throws InterruptedException {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys("flower");
		driver.findElement(By.id("lname")).sendKeys("rose");
		driver.findElement(By.id("email")).sendKeys("test2@gmail.com");
		driver.findElement(By.name("addr")).sendKeys("chennai");
		driver.findElement(By.id("telephoneno")).sendKeys("9234229988");
		Thread.sleep(1000);

	}

	@When("the user clicks the submit button")
	public void the_user_clicks_the_submit_button() {
		driver.findElement(By.name("submit")).click();
		
	}

	@Then("the user should see the customer ID generated")
	public void the_user_should_see_the_customer_ID_generated() {
		Assert.assertTrue(driver.findElement(By.tagName("h3")).isDisplayed());
	}

	@When("the user clicks the reset button")
	public void the_user_clicks_the_reset_button() {
		driver.findElement(By.xpath("//input[@type='reset']")).click();

	}

	@Then("the form should be cleared")
	public void the_form_should_be_cleared() {
		Assert.assertTrue(driver.getCurrentUrl().contains("addcustomer"));
	}

	@When("the user enters incorrect data format")
	public void the_user_enters_incorrect_data_format() {
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys("234");
		driver.findElement(By.id("lname")).sendKeys("567");
		driver.findElement(By.id("email")).sendKeys("test1@gmail.com");
		driver.findElement(By.name("addr")).sendKeys("chennai");
		driver.findElement(By.id("telephoneno")).sendKeys("qwertyu");

	}

	@Then("the error message is displayed")
	public void the_error_message_is_displayed() {
		Assert.assertTrue(driver.findElement(By.id("message")).isDisplayed());

	}

	@When("The user keeps the field empty")
	public void the_user_keeps_the_field_empty() {
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys("");
		driver.findElement(By.id("lname")).sendKeys("");
		driver.findElement(By.id("email")).sendKeys("");
		driver.findElement(By.name("addr")).sendKeys("");
		driver.findElement(By.id("telephoneno")).sendKeys("");
		

	}
	@Then("the error message in alert is displayed")
	public void the_error_message_in_alert_is_displayed() {
		//Assert.assertTrue(driver.getCurrentUrl().contains("addcustomer"));
	    driver.switchTo().alert().accept();
	}
	@Given("the user is in add tarrif plan page")
	public void the_user_is_in_add_tarrif_plan_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Srini Raju V\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		Thread.sleep(2000);
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
		}

	@When("the user fill in the valid plan details{string},{string},{string},{string},{string},{string},{string}")
	public void the_user_fill_in_the_valid_plan_details(String MonthRental, String FreelocMin, String FreeintMins, String Freesms, String Loccharges, String Intchargesv, String Smscharges) {
	driver.findElement(By.id("rental1")).sendKeys(MonthRental);
	driver.findElement(By.id("local_minutes")).sendKeys(FreelocMin);
	driver.findElement(By.id("inter_minutes")).sendKeys(FreeintMins);
	driver.findElement(By.id("sms_pack")).sendKeys(Freesms);
	driver.findElement(By.id("minutes_charges")).sendKeys(Loccharges);
	driver.findElement(By.id("inter_charges")).sendKeys(Intchargesv);
	driver.findElement(By.id("sms_charges")).sendKeys(Smscharges);
	}

	@Then("user should see the success message")
	public void user_should_see_the_success_message() {
		Assert.assertTrue(driver.findElement(By.tagName("h2")).isDisplayed());
	}
	@Then("the add tariff form should be cleared")
	public void the_add_tariff_form_should_be_cleared() {
		Assert.assertTrue(driver.findElement(By.tagName("h1")).isDisplayed());
		
	  	}
	@When("the user fill in the invalid format")
	public void the_user_fill_in_the_invalid_format() {
		driver.findElement(By.id("rental1")).sendKeys("oiuytr");
		driver.findElement(By.id("local_minutes")).sendKeys("FreelocMin");
		driver.findElement(By.id("inter_minutes")).sendKeys("FreeintMins");
		driver.findElement(By.id("sms_pack")).sendKeys("Freesms");
		driver.findElement(By.id("minutes_charges")).sendKeys("Loccharges");
		driver.findElement(By.id("inter_charges")).sendKeys("Intchargesv");
		driver.findElement(By.id("sms_charges")).sendKeys("Smscharges");
		
	   }

	@Then("user should see the error message")
	public void user_should_see_the_error_message() {
		Assert.assertTrue(driver.findElement(By.id("message3")).isDisplayed());
		
	   }
	@Given("the user is in the pay billing page")
	public void the_user_is_in_the_pay_billing_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Srini Raju V\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		Thread.sleep(2000);
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//a[text()='Pay Billing']")).click();
	
	   	}

	@When("the user enters valid customer ID")
	public void the_user_enters_valid_customer_ID() {
	    driver.findElement(By.id("customer_id")).sendKeys("756654");
	}

	@Then("the bill is genrated")
	public void the_bill_is_genrated() {
		Assert.assertTrue(driver.findElement(By.tagName("h3")).isDisplayed());
	    }

	@When("the user enters invalid customer ID")
	public void the_user_enters_invalid_customer_ID() {
		 driver.findElement(By.id("customer_id")).sendKeys("12345");
	   }

	@Then("the invalid customer id shoul generate")
	public void the_invalid_customer_id_shoul_generate() {
		Assert.assertTrue(driver.findElement(By.tagName("h4")).isDisplayed());
	    
	   }
	@Given("the user is in add tarrif plan to customer page")
	public void the_user_is_in_add_tarrif_plan_to_customer_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Srini Raju V\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		Thread.sleep(2000);
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan to Customer']")).click();
	
	   }

	@Then("the tariff plan is added")
	public void the_tariff_plan_is_added() {
	    Assert.assertTrue(driver.findElement(By.tagName("h1")).isDisplayed());
	}

	@Then("Then the invalid customer id error message should display")
	public void then_the_invalid_customer_id_error_message_should_display() {
		Assert.assertTrue(driver.findElement(By.tagName("h4")).isDisplayed());
	  }








}
