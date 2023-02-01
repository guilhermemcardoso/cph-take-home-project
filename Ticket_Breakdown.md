# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

#### Ticket 0001

As a developer, I need to create a new database migration to insert a new field in the Agents table.

**Acceptance criteria:**

- The field will be called `customId`;
- The field will have type `varchar(50)`;
- The field will be **optional**;
- The field will be **unique**;
- The default value to this field will be the `id` column converted to `string`, since unique field can't be empty;

**Estimated effort:** 1 hour

#### Ticket 0002

As an User, I want to have an option to create custom Ids to Agents. 

To do that, I need to access the Edit Agent page. The Edit Agent page will contain a new Input text component related to the new field (`customId`) created on the this [task](#ticket-0001)

**Acceptance criteria:**

- There will be a new Input text component in the Edit Agent page;
- The new Input is **optional** and can be left empty;
- If the user tries to use an empty string as the `customId`, a message will be displayed and the `Save` button will be disabled since it can't be empty;
- If the user clicks on `Save` button, the content from the new Input will be saved on the Database;

**How to test:**

- Go to Edit Agent page;
- Add some text in the `Custom Id` component;
- Click on `Save`;
- Go to the database;
- Search for the Agent you created the custom id;
- Check if there is something in the `customId` column;

**Estimated effort:** 1.5 hours

#### Ticket 0003

As an User, I want to choose which **Agent Id** the report will display: the `id` field or the `customId` field. 

The report shows info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. So the user have the hability to choose the information will be displayed as the `Agent Id` in the report.

To do that, we need to add a new Dropdown component in the Generate Report page with two options: **Id** and **Custom Id**. The default option will be `Id`.

**Acceptance criteria:**

- The user can select which Agent Id he/she wants to use to generate the report;
- The option the user selects before generating the report will be the information display as the `Agent Id` on the generated PDF file;

**Estimated effort:** 2 hours
