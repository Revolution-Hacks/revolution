<script>
  import Page from '$lib/components/Page.svelte';
</script>

<svelte:head>
  <meta
    name="description"
    content="This safeguarding policy outlines what steps we are taking to protect under 18's at Revolution, the proceedures in place for reporting and escalating safeguarding concerns, and other related policies."
  />
</svelte:head>

{#snippet header(id, name)}
  <h2 {id}><a href={`#${id}`}>{name}</a></h2>
{/snippet}

<Page title="Safeguarding Policy">
  <h1>Revolution Safeguarding Policy</h1>
  {@render header('overview', 'Overview')}
  <p>
      This safeguarding policy outlines what steps we are taking to protect under 18's at Revolution, the proceedures in place for reporting and escalating safeguarding concerns, and other related policies.
  </p>
  {@render header('table-of-contents', 'Table of contents')}

  <ul role="navigation" aria-labelledby="table-of-contents">
    <li><a href="#travel">Traveling to Revolution</a></li>
    <li><a href="#event-security">Keeping the event space secure</a></li>
    <li><a href="#photoID">Bringing suitable Photo ID</a></li>
    <li><a href="#safe-environment">Maintaining a safe environment</a></li>
    <li><a href="#background-checks">Ensuring the suitability of staff</a></li>
    <li><a href="#whistleblowing">Whistleblowing and reporting concerns</a></li>
    <li><a href="#sleeping-showering">Sleeping and showering arangements</a></li>
    <li><a href="#photography-consent">Event photography</a></li>
    <li><a href="#data-protection">Data protection</a></li>
  </ul>

  {@render header('travel', 'Traveling to Revolution')}
  <p>
    Regardless of how our participants choose to travel to Revolution, we will make phone numbers and other means of communication open so participants can get in touch with us to let us know of any concerns or delays.
  </p>
  
  <p>
    Extra considerations have been made for participants travelling on their own to the event, either by rail or by plane. Naturally, parents will have questions and concerns surrounding solo travel, and we are taking the following steps to protect participants on their way to Revolution:
  </p>
  <p>We may book tickets on behalf of some participants, and will make every effort in good faith to group participants together onto the same journeys. Parents/Guardians should understand thought that this might not always be possible</p>
  <p>We will inform participants of emergency contact numbers prior to their journey so they can contact us with any questions or concerns.</p>
  <p>We will set aside funds for emergencies and other issues while travelling, such as rebookings, taxis, and food.</p>
  <p>We will encourage all participants to have a fully charged phone</p>
  <p>On arrival at Manchester Airport, Liverpool Airport, or Manchester Central Station, Revolution volunteers will be on hand to collect participants and take them to the event.</p>

  {@render header('event-security', 'Keeping the event space safe and secure')}
  <p>
    As Revolution will be run inside of a public space, we are taking a number of steps and precautions to protect our participants. Starting with check-in, we will take the following steps:
  </p>
  <ul>
    <li>Confirm name and DOB at desk</li>
    <li>Ask for Photo ID to be presented to confirm identity</li>
    <li>Check any other relevant details, such as allergies and dietary restrictions, any medicines etc.</li>
    <li>Hand over event tote bag, filled with information leaflets, swag, and a DIY badge kit</li>
  </ul>
  <p>
    As the event space will be open in part to the public, we will ensure that a portion of the venue is reserved exclusively for participants, and will ask all participants to explore the rest of the venue in pairs for safety.
  </p>
  <p>
    We appreciate that like at other hackathons, participants may wish to explore the surrounding areas of the venue, and with plenty to see and do, we fully understand why. 
  </p>
  <p>
    Participants will only be allowed to leave the venue unescorted if their parents or legal guardians have consented to this on the event liability waiver. If a participant believes an error has been made, and a parent or guardian can confirm this by contact with us, then we will update the participant’s account to reflect this. Participants will only be allowed to leave the venue in groups of 2 at a minimum and will be reminded of the emergency contact number
  </p>
  <p>
    For fire safety, participants will be shown the nearest fire exits on the premises, and will be asked to avoid leaving tools such as soldering irons and laser cutters unattended. Volunteers will be instructed to keep a watch out for potential hazards.
  </p>
  <p>
    In the event of an emergency requiring an evacuation or lockdown of the venue, the venue’s procedures will be followed and volunteers will be briefed on these procedures.
  </p>
  <p>
    A first aid trained staff member will be on duty at all times, based near the electronics workshop, though may be called out to any location at the building. Additional volunteers and organisers who also possess the relevant first aid qualifications, and who have the appropriate insurance, may also be asked to act as first aiders for the duration of the event.
  </p>

  {@render header('photoID', 'Bringing suitable Photo ID')}
  <p>
    As we look to make Revolution as secure as possible, we are implementing a 100% ID check policy. This allows us to make sure only participants and volunteers are able to enter the venue, making the event safer for everyone. Please note we will only accept IDs that have a photo attached to them.
  </p>
    We will accept any Government Issued ID, including Passports and Driver’s Licences from any nationality, MOD 90 cards, and Firearm Certificates.
  <p>
    We will also accept any commercial ID that is stamped with the PASS mark, valid Student IDs, and travel cards with DOB and photos.
  </p>
  <p>
    Digital IDs are also accepted from the following providers, YOTI, Post Office Easy ID, and MyRAFAC.
  </p>
  <p>
    We may turn away participants if we are unable to confirm their identity in any way.
  </p>

  {@render header('safe-environment', 'Maintaining a safe environment')}
  <p>
    As we look to create an environment that is both enjoyable and safe for all participants, we will not tolerate behaviour that is discriminatory, sexual, or threatening by nature. We will also not tolerate breaking of the rules and policies set out in this safeguarding policy, especially when those rules are set out for the safety of participants.
  </p>
  <p>
    As an event that will be mostly advertised to the Hack Club community, we will follow their rules and regulations wherever possible.
  </p>
  <p>
    We will especially not tolerated behaviour that matches the following:
  </p>
  <ul>
    <li>insulting, demeaning, hateful, or threatening remarks;</li>
    <li>discrimination based on age, nationality, race, (dis)ability, gender (identity or expression), sexuality, religion, or similar personal characteristic;</li>
    <li>bullying or systematic harassment;</li>
    <li>unwelcome sexual advances, including sexually explicit content.</li>
  </ul>
  <p>
    The organisers of Revolution reserve the right to remove anyone who does not observe the rules and code of conduct set forth in this policy. We may work with parents/guardians to send home participants if travelling solo, or if local, may require a parent/guardian to collect a participant.
  </p>
  <p>
    If a participant can not be safely removed from the event due to risks or concerns faced, then we may contact Hack Club to request harsh penalties within their community, including requesting suspensions or removal from the Hack Club slack, though we cannot guarantee this may happen.
  </p>

  {@render header('background-checks', 'Ensuring the suitability of staff')}
  <p>
    In the interest of protecting attendees, all UK nationals who choose to volunteer with Revolution will undergo enhanced DBS checks. These background checks are a legal requirement for staff and volunteers working with minors and other vulnerable demographics, and so there will be no exceptions to this policy
  </p>
  <p>
    For volunteers of other nationalities, Revolution will assess on a case by case basis. As per our policy of 100% background checks, if we are sadly unable to order a suitable background check in their country of origin, we reserve the right to refuse the volunteer.
  </p>
  <p>
    The organisers reserve the right to refuse potential volunteers based on their suitability to work in an environment with children, based on any findings of background checks, social media activity, and other activity that we deem inappropriate.
  </p>

  {@render header('whistleblowing', 'Whistleblowing and reporting concerns')}
  <p>
    Protecting participants at Revolution is of our utmost importance. As such, we believe that it is important to have a whistleblowing policy that is easy to understand and navigate should any issues arise.
  </p>
  <p>
    Participants will be able to raise any concerns they may have with any volunteer at Revolution, and will have their concerts dealt with in a quick manner.
  </p>
  <p>
    Staff will be required to keep all received complaints anonymous and to act in a manner that upholds the dignity and respect of the whistleblower
  </p>
  <p>
    Participants will alternatively have access to means of anonymously reporting any concerns or wrongdoing that they may encounter.
  </p>
  <p>
    All incidents will be investigated in the first instance and acted upon accordingly.
  </p>
  <p>
    If a participant believes that an issue has not been dealt with appropriately, they should be informed of the ability to contact a proscribed organisation, or Hack Club’s safeguarding lead instead.
  </p>

  {@render header('sleeping-showering', 'Sleeping and showering arangements')}
  <p>
    Specific details regarding sleeping and showering arrangements are still to be confirmed, but for now, we are looking to provide the following:
  </p>
  <p>
    Gender separated facilities for under 18’s and similar, but separate facilities for over 18’s
  </p>
  <p>
    Volunteers to be made available throughout the night in the event of safeguarding or wellbeing issues.
  </p>

  {@render header('photography-consent', 'Event photography')}
  <p>
    At Revolution, we will post photos and videos to our social media accounts and on the Hack Club slack to promote our event and to share the experiences of our participants.
  </p>
  <p>
    Parents and guardians will be asked for consent for their child to appear in filmed content in the event liability waiver. If this consent can not be arranged, we will let the participant know when we are filming so they can move out of the way.
  </p>
  <p>
    Participants should understand that there is still the risk of them appearing in the background of some shots when attending Revolution.
  </p>
  <p>
    All material filmed is the sole copyright and property of Revolution.
  </p>


  {@render header('data-protection', 'Data protection')}
  <p>Please see our data protection policy <a href="../privacy">here</a></p>

  {@render header('contact', 'Who do I contact with queries surrounding our safeguarding policy')}
  <p>
    Please contact <a href="mailto:policy@revohacks.com">policy@revohacks.com</a>.
  </p>
</Page>

<style lang="scss">
  @use 'src/lib/style';

  .table-wrapper {
    padding: 1em;

    @include style.box-texture('$lib/textures/containerbox.svg');
  }

  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    // border: 1px solid rgba(var(--fg), 50%);
    text-align: left;
    padding: 0.5em 1em;
  }

  th:first-child,
  td:first-child {
    border-right: thin solid rgba(var(--fg), 50%);
  }

  td {
    border-top: thin solid rgba(var(--fg), 50%);
  }

  h2 {
    padding: 1em 0 0.5em 0;

    a {
      text-decoration: none;
    }
  }
</style>
