



public class AlfredTest {

    public static void main(String[] args) {
        // Make an instance of AlfreQuotes to access all its methods.
        AlfredQuotes alfredBot = new AlfredQuotes();

        // make basic test greetings, providing any necessary data
        String testGreeting = alfredBot.basicGreeting();
        String testGuestGreeting = alfredBot.guestGreeting("Beth Kane");
        String testDateAnnouncement = alfredBot.dateAnnouncement();

        String alexisTest = alfredBot.respondBeforeAlexis(
            "Alexis! Play some low-fi beats."
        );
        String alfredTest = alfredBot.respondBeforeAlexis(
            "I can't find my yo-yo. Maybe Alfred will know where it is."
        );
        String notRelevantTest = alfredBot.respondBeforeAlexis(
            "Maybe that's what Batman is about. Not winning. But failing..."
        );

        //print the greetings to test.
        System.out.println(testGreeting);

        // uncomment once implemented:
        System.out.println(testGuestGreeting);
        System.out.println(testDateAnnouncement);
        System.out.println(alexisTest);
        System.out.println(alfredTest);
        System.out.println(notRelevantTest);



    }







}