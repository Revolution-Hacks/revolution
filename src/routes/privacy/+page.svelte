<script>
  import Page from '$lib/components/Page.svelte';

  let glossary = {
    'data subject': 'someone whose information we have collected',
    'data processing agreement':
      'the agreement between us and a third party that states their rights and obligations to us and to you concerning the protection of personal data',
    'personal data': 'any data that could be used to identify someone, for example, your name or email address',
    // "sensitive personal data":
    // "personal data that requires more protection because it is sensitive, like your racial or ethnic origin or information about your health",
    'IP address': 'a series of numbers that represents the network you are currently on',
    'approximate location': 'an estimated location based on your IP address, for example, the country you live in',
    'legitimate interests':
      'processing your data for the interests of Revolution or third parties while balancing your interests, rights and freedoms',
    'user agent':
      'a piece of text that identifies the browser or email client you are using, as well as what device and operating system you use',
    'encrypted at rest': 'data that is encrypted while it is being stored and not used',
    'encrypted in flight': 'data that is encrypted while it is being transferred from one machine to another'
  };
</script>

<svelte:head>
  <meta
    name="description"
    content="This privacy policy outlines how we collect, store and process your data, as well as your rights under the UK Data Protection Act 2018."
  />
</svelte:head>

{#snippet term(definition)}
  <a href={`#term-${definition.replaceAll(' ', '')}`} title={glossary[definition]}>{definition}</a>
{/snippet}

{#snippet header(id, name)}
  <h2 {id}><a href={`#${id}`}>{name}</a></h2>
{/snippet}

<Page title="Privacy Policy">
  <h1>Revolution Privacy Policy</h1>
  {@render header('overview', 'Overview')}
  <p>
    This privacy policy outlines how we collect, store and process your data, as well as your rights under the UK Data
    Protection Act 2018.
  </p>
  {@render header('table-of-contents', 'Table of contents')}
  <ul>
    <li><a href="#key-terms">Key terms</a></li>
    <li><a href="#information-collected">What information do we collect and why?</a></li>
    <li><a href="#storage">How do you store my data?</a></li>
    <li><a href="#retention">When will you delete my information?</a></li>
    <li><a href="#rights">What are my rights as a data subject?</a></li>
    <li><a href="#contact">Who do I contact regarding my personal data?</a></li>
  </ul>

  {@render header('key-terms', 'Key terms')}
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th scope="col">Term</th>
          <th scope="col">Definition</th>
        </tr>
      </thead>
      <tbody>
        {#each Object.entries(glossary) as [term, definition]}
          <tr id={`term-${term.replaceAll(' ', '')}`}>
            <td>{term}</td>
            <td>{definition}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  {@render header('information-collected', 'What information do we collect and why?')}
  <p>
    In general, we do not collect information that you do not explicitly provide to us. However, when you visit our site
    or interact with our emails, we may collect:
  </p>
  <ul>
    <li>your {@render term('IP address')},</li>
    <li>
      your {@render term('approximate location')} (for example, the country you live in, but not your home address),
    </li>
    <li>your {@render term('user agent')}.</li>
  </ul>
  <p>
    We collect this information to improve Revolution. For example, knowing that many people from other countries are
    interested would help us budget for providing travel grants to people.
  </p>
  <p>When you sign up to get emails from us, we store your email so that we can send you an email later.</p>

  {@render header('storage', 'How do you store my data?')}
  <p>
    We store and process your data with various third-party services. Here are some of our third-party services and
    their {@render term('data processing agreement')}s:
  </p>
  <ul>
    <li><a href="https://postmarkapp.com/dpa">Postmark</a></li>
    <li><a href="https://www.airtable.com/company/dpa">Airtable</a></li>
    <li><a href="https://cloud.google.com/terms/data-processing-addendum/?hl=en">Google Workspace</a></li>
  </ul>
  <p>
    Your data is {@render term('encrypted at rest')} and {@render term('encrypted in flight')} using secure encryption algorithms.
    We take your personal information seriously, and our team members only have access to the data they need to carry out
    their work.
  </p>

  {@render header('retention', 'When will you delete my information?')}
  <p>
    We will securely delete your information soon after the event, and no later than one year after you have provided it
    to us. If you would like your information deleted sooner, you may reach out to us at
    <a href="mailto:hello@revohacks.com">hello@revohacks.com</a>.
  </p>

  {@render header('rights', 'What are my rights as a data subject?')}
  <p>Under the Data Protection Act 2018, you have the following rights:</p>
  <ul>
    <li>
      <b>The right to be informed</b><br />
      We must tell you what {@render term('personal data')} we collect, why we collect it, for how long, and if we share
      your {@render term('personal data')} with third parties.
    </li>
    <li>
      <b>The right to access</b><br />
      You have the right to know what informatin we hold about you.
    </li>
    <li>
      <b>The right to rectification</b><br />
      We must update our records of you if you tell us that they are wrong.
    </li>
    <li>
      <b>The right to restrict processing</b><br />
      You have the right to ask us to limit the ways in which we process your {@render term('personal data')}.
    </li>
    <li>
      <b>The right to data portability</b><br />
      You have the right to obtain and reuse your {@render term('personal data')} across different services.
    </li>
    <li>
      <b>The right to object</b><br />
      You may object to our processing of your {@render term('personal data')} that is collected for
      {@render term('legitimate interests')}.
    </li>
  </ul>
  <p>
    <strong>This is not legal advice.</strong> Learn more on
    <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/">
      ico.org.uk
    </a>.
  </p>

  {@render header('contact', 'Who do I contact regarding my personal data?')}
  <p>
    Please contact <a href="mailto:hello@revohacks.com">hello@revohacks.com</a>.
  </p>
</Page>

<style lang="scss">
  @use 'src/lib/style';

  .table-wrapper {
    @include style.box-texture('$lib/textures/containerbox.svg');
    padding: 2em;
  }

  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid rgba(var(--fg), 50%);
    padding: 0.5em;
  }

  h2 {
    padding: 1em 0 0.5em 0;

    a {
      text-decoration: none;
    }
  }
</style>
