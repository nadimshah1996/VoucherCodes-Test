browser.ignoreSynchronization = true; //We use this function to switch to non-angular pages so that protractor understand that it is not using an angular page

    describe('invalid location functionality', function() {
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

        it('should enter an invalid location', function(){
            // Click the location search box and type fakecity
            element(by.css('input[data-qa="el:locationDropdown enabled:true"]')).sendKeys('fakecity');
            browser.sleep(1000);
            //This tail should fail on purpose as there is no autosuggest appearing for 'fakecity' as it does not exist
            element.all(by.css('.pac-item')).first().click();          
        });
  });
