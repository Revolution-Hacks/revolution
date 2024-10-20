<script>
  import Page from '$lib/components/Page.svelte';

  let glossary = {
    'Data Subject': 'The person we have collected data from.',
    'Data Processing Agreement':
      'The agreement between us and a third party that states their rights and obligations to us and to them concerning the protection of their personal data.',
    'Personal Data':
      'Any data that could be used to identify someone, for example, names, email address or IP addresses.',
    'Sensitive Personal Data':
      'Any data that, under the DPA, must be treated with extra care, such as infomation relating to Race/Ethnicity, Health, Political Opinions and more.',
    'IP address': 'A series of numbers that represents the network you are currently on.',
    'Approximate Location':
      'An estimated location based on your IP address, for example, the country and city you live in.',
    'Legitimate Interests':
      'Processing your data for the interests of Revolution or third parties while balancing your interests, rights and freedoms.',
    'User Agent':
      'A piece of text that identifies the browser or email client you are using, as well as what device and operating system you use.',
    'Encrypted at Rest': 'Data that is encrypted while it is being stored and not used.',
    'Encrypted in Flight / Transmission':
      'Data that is encrypted while it is being transferred from one machine to another.'
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
  <ul role="navigation" aria-labelledby="table-of-contents">
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
      your {@render term('Approximate Location')} (for example, the country you live in, but not your home address),
    </li>
    <li>your {@render term('User Agent')}.</li>
  </ul>
  <p>
    We collect this information to improve Revolution, which allows us to improve the event experience for you. For
    example, if we know how many people from outside the UK are interested in attending Revolution, we can approximate
    how much funding we will need to set aside for travel grants.
  </p>
  <p>
    When you sign up to recieve emails from us, we store your email so that we can send you emails relating to
    Revolution in the future.
  </p>

  {@render header('storage', 'How do you store my data?')}
  <p>
    We store and process your data with various third-party services. Here are some of our third-party services and
    their {@render term('Data Processing Agreement')}s:
  </p>
  <ul>
    <li><a href="https://postmarkapp.com/dpa">Postmark</a></li>
    <li><a href="https://www.airtable.com/company/dpa">Airtable</a></li>
    <li><a href="https://cloud.google.com/terms/data-processing-addendum/?hl=en">Google Workspace</a></li>
  </ul>
  <p>
    Your data is {@render term('Encrypted at Rest')} and {@render term('Encrypted in Flight')} using secure encryption algorithms.
    We consider the protection of your personal information to be our highest priority. Our teams only have access to the
    data nessecary to fufil their roles, and nothing more.
  </p>

  {@render header('retention', 'When will you delete my information?')}
  <p>
    We will securely erase all of your personal data with the exception of name and email address no later than 1 month
    after the conclusion of Revolution, and we will securely erase your name and email address no later than one year
    after you have provided it to us. Under the Data Protection Act, you have the right to erasure. If you would like
    your information deleted sooner, you may reach out to us at
    <a href="mailto:policy@revohacks.com">policy@revohacks.com</a>.
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
      You have the right to know what information we hold about you in a human readable format at any time upon request.
    </li>
    <li>
      <b>The right to rectification</b><br />
      We must update our records of you if you tell us that they are wrong or inaccurate.
    </li>
    <li>
      <b>The right to restrict processing</b><br />
      You have the right to ask us to limit the ways in which we process your {@render term('Personal Data')}.
    </li>
    <li>
      <b>The right to data portability</b><br />
      You have the right to obtain and reuse your {@render term('Personal Data')} across different services.
    </li>
    <li>
      <b>The right to object</b><br />
      You may object to our processing of your {@render term('Personal Data')} that is collected for
      {@render term('Legitimate Interests')}.
    </li>
  </ul>

  <p>
    To make subject access requests, update your records, or exercise any other rights you hold under the Data
    Protection Act, please reach out to us via <a href="mailto:policy@revohacks.com">policy@revohacks.com</a>
  </p>
  <p>
    <strong>This is not legal advice.</strong> Learn more on
    <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/">
      ico.org.uk
    </a>.
  </p>

  {@render header('contact', 'Who do I contact regarding my personal data?')}
  <p>
    Please contact <a href="mailto:policy@revohacks.com">policy@revohacks.com</a>.
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
