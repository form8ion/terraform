Feature: Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
    Then the main file is created
    And the version file is created
