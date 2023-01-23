;browser.ignoreSynchronization = true; //We use this function to switch to non-angular pages so that protractor understand that it is not using an angular page

    describe('Verify Searching local restaurants for a number of people', function(){
        it('should navigate to vouchercodes homepage', function(){
            //navigate to vouchercodes homepage
            browser.get('https://www.vouchercodes.co.uk/')
            //verify that we are on the homepage
            expect(browser.getCurrentUrl()).toEqual('https://www.vouchercodes.co.uk/');
        });

        it('should search for restaurants', function(){
            //search for a local restaurants
            element(by.css('input[data-qa="el:searchInput"]')).click();
            element(by.css('input[data-qa="el:search search:"]')).sendKeys('Restaurants');    
            browser.sleep(500);
        });

        it('should click view all offers', function(){
            //click view all offers
            element(by.css('a[data-qa="el:searchOffersViewAll"]')).click();
            browser.sleep(500);           
        });

        it('should enter the location of the local restaurants', function(){
            // Click the location search box and type E14 6JP which is in London
            element(by.css('input[data-qa="el:locationDropdown enabled:true"]')).sendKeys('E14 6JP');
            browser.sleep(1000);
            element.all(by.css('.pac-item')).first().click();          
        });

        it('should click the day dropdown', function(){
            // Click the day dropdown and select "Any"
            element(by.css('select[data-qa="el:dayDropdown"]')).click();
            element(by.css('select[data-qa="el:dayDropdown"] option[value=""]')).click();
        });

        it('should click 5 people', function(){
            // Select "5 people" in the people dropdown
            element(by.css('select[data-qa="el:peopleDropdown"]')).click();
            element(by.css('select[data-qa="el:peopleDropdown"] option[value="5"]')).click();   
                  
        });

        it('should click find restaurants button', function(){
            // Click "Find restaurant vouchers" button
            element(by.css('button[data-qa="el:findRestaurantsVoucherButton"]')).click();           
        });    
    });
  