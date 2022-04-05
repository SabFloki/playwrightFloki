Feature: Login

    #Scenario Outline: Letcode Application - Create New Account
    #   Given User launched eshop login page
    #  When User create account with "<FirstName>", "<EmailID>" and "<Password>"
    # Then User account should get created
    #
    #       Examples:
    #          | FirstName | EmailID               | Password   |
    #         | Sab       | Shabarish32@gmail.com | Password$1 |

    Scenario Outline: Login to the Letcode Application with correct Password
        Given User launched eshop login page
        When User logged in eshop using the valid emailid "<EmailID>" and the valid password "<Password>"
        Then User should get logged in

        Examples:
            | EmailID              | Password |
            | koushik350@gmail.com | Pass123$ |

#Scenario Outline: Login to the Letcode Application with Wrong Password
#   Given User launched eshop login page
#  When User logged in eshop using the invalid emailid "<EmailID>" and the invalid password "<Password>"
# Then User should not get logged in

#Examples:
#   | EmailID                    | Password  |
#  | testuser_negative@shop.com | Testing$1 |