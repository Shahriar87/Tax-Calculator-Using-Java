package Exercise_1;
import java.util.Scanner;



public class US_2018_Tax_Bracket {

	public static void main(String[] args) {


	Scanner sal = new Scanner(System.in);

	Scanner FS = new Scanner(System.in);	
	
	
		double salary = sal.nextDouble();
	
		double tax = 0.0;		
		
		/*FilingStatus:
		 * Single = 1
		 * Head of Household = 2
		 * Married filing jointly or qualifying widow = 3
		 * Married filing separately = 4
		 */
		
		int FilingStatus = FS.nextInt();  
		
		if (FilingStatus==1) {
		
		
				if(salary <= 9325) {
					tax = salary * .10;
				}else if(salary <= 37950) {
					tax = salary * .15;
				}else if(salary <= 91900) {
					tax = salary * .25;
				}else if(salary <= 191650) {
					tax = salary * .28;
				}else if(salary <= 416700) {
					tax = salary * .33;
				}else if(salary <= 418400) {
					tax = salary * .35;
				}else{
					tax = salary * .396;
					}
				System.out.println("Tax = " + tax);
		}
		
		else if (FilingStatus==2) {
				if(salary <= 13350) {
					tax = salary * .10;
				}else if(salary <= 50800) {
					tax = salary * .15;
				}else if(salary <= 131200) {
					tax = salary * .25;
				}else if(salary <= 212500) {
					tax = salary * .28;
				}else if(salary <= 416700) {
					tax = salary * .33;
				}else if(salary <= 444550) {
					tax = salary * .35;
				}else{
					tax = salary * .396;
					}
				System.out.println("Tax = " + tax);
		}
		else if (FilingStatus==3) {
				if(salary <= 18650) {
					tax = salary * .10;
				}else if(salary <= 75900) {
					tax = salary * .15;
				}else if(salary <= 153100) {
					tax = salary * .25;
				}else if(salary <= 233350) {
					tax = salary * .28;
				}else if(salary <= 416700) {
					tax = salary * .33;
				}else if(salary <= 470000) {
					tax = salary * .35;
				}else{
					tax = salary * .396;
					}
				System.out.println("Tax = " + tax);
		}	
		else if (FilingStatus==4) {
				if(salary <= 9325) {
					tax = salary * .10;
				}else if(salary <= 37950) {
					tax = salary * .15;
				}else if(salary <= 76550) {
					tax = salary * .25;
				}else if(salary <= 116675) {
					tax = salary * .28;
				}else if(salary <= 208350) {
					tax = salary * .33;
				}else if(salary <= 235350) {
					tax = salary * .35;
				}else{
					tax = salary * .396;
					}
				System.out.println("Tax = " + tax);
		}	
		else {
			System.out.println("Tax can not be determined because of invalid filing status");
		}	
					
			
				
		
	
	}
	
	
}


