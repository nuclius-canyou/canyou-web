import { styled } from '@mui/material/styles'
import { Container, Typography, Box, Grid } from '@mui/material'

const MuiContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  '& .MuiGrid-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: '0px',
    height: '100%',
  },
  '& .mainHeading': {
    marginBottom: '2rem',
    textAlign: 'center',
    '& > .MuiTypography-root': {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#fff',
      [theme.breakpoints.down('md')]: {
        fontSize: '30px',
      },
    },
  },
  '& .content': {
    color: '#fff',
    lineHeight: '23px',
    '& >*': {
      fontSize: '20px',
    },
  },
}))

const Privacy = () => {
  return (
    <MuiContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10} md={10}>
          <Box className='mainHeading'>
            <Typography variant='h2'>Privacy Policy</Typography>
          </Box>
          <Box className='content'>
            <p style={{ marginBottom: '20px' }}>Last updated MAr 15, 2023</p>
            <p>
              This privacy notice for CanYou Inc. (doing business as CanYou) (&quot;CanYou,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and why we might
              collect, store, use, and/or share (&quot;process&quot;) your information when you use
              our services (&quot;Services&quot;), such as when you:
            </p>
            <ul>
              <li>
                <p>
                  Visit our website at https://canyouapp.com, or any website of ours that links to
                  this privacy notice
                </p>
              </li>
              <li>
                <p>
                  Engage with us in other related ways, including any sales, marketing, or events
                </p>
              </li>
            </ul>
            <p>
              Questions or concerns?&nbsp;Reading this privacy notice will help you understand your
              privacy rights and choices. If you do not agree with our policies and practices,
              please do not use our Services. If you still have any questions or concerns, please
              contact us at support@canyouapp.com.
            </p>
            <p>
              <br />
            </p>
            <p>
              <br />
            </p>
            <p>SUMMARY OF KEY POINTS</p>
            <p>
              <br />
            </p>
            <p>This summary provides key points from our privacy notice.</p>
            <p>
              <br />
            </p>
            <p>
              What personal information do we process?&nbsp;When you visit, use, or navigate our
              Services, we may process personal information depending on how you interact with
              CanYou and the Services, the choices you make, and the products and features you use.
            </p>
            <p>
              Do we process any sensitive personal information?&nbsp;See Personal Information
              Provided by You for details.
            </p>
            <p>
              Do we receive any information from third parties?&nbsp;We may receive information from
              public databases, marketing partners, social media platforms, and other outside
              sources.
            </p>
            <p>
              How do we process your information?&nbsp;We process your information to provide,
              improve, and administer our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We may also process your information for other
              purposes with your consent. We process your information only when we have a valid
              legal reason to do so.
            </p>
            <p>
              In what situations and with which types of parties do we share personal
              information?&nbsp;We may share information in specific situations and with specific
              categories of third parties.
            </p>
            <p>
              How do we keep your information safe?&nbsp;We have organizational and technical
              processes and procedures in place to protect your personal information. However, no
              electronic transmission over the internet or information storage technology can be
              guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
              cybercriminals, or other unauthorized third parties will not be able to defeat our
              security and improperly collect, access, steal, or modify your information.
            </p>
            <p>
              What are your rights?&nbsp;Depending on where you are located geographically, the
              applicable privacy law may mean you have certain rights regarding your personal
              information.
            </p>
            <p>
              How do you exercise your rights?&nbsp;The easiest way to exercise your rights is by
              contacting us. We will consider and act upon any request in accordance with applicable
              data protection laws.&nbsp;Want to learn more about what CanYou does with any
              information we collect?
            </p>
            <p>
              <br />
            </p>
            <p>
              <br />
            </p>
            <p>TABLE OF CONTENTS</p>
            <p>
              <br />
            </p>
            <p>1. WHAT INFORMATION DO WE COLLECT?</p>
            <p>2. HOW DO WE PROCESS YOUR INFORMATION?</p>
            <p>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</p>
            <p>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>
            <p>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</p>
            <p>6. HOW LONG DO WE KEEP YOUR INFORMATION?</p>
            <p>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</p>
            <p>8. DO WE COLLECT INFORMATION FROM MINORS?</p>
            <p>9. WHAT ARE YOUR PRIVACY RIGHTS?</p>
            <p>10. CONTROLS FOR DO-NOT-TRACK FEATURES</p>
            <p>11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</p>
            <p>12. DO WE MAKE UPDATES TO THIS NOTICE?</p>
            <p>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p>
            <p>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</p>
            <p>
              <br />
            </p>
            <p>1. WHAT INFORMATION DO WE COLLECT?</p>
            <p>
              <br />
            </p>
            <p>Personal information you disclose to us</p>
            <p>
              <br />
            </p>
            <p>In Short:&nbsp;We collect personal information that you provide to us.</p>
            <p>
              <br />
            </p>
            <p>
              We collect personal information that you voluntarily provide to us when you register
              on the Services, express an interest in obtaining information about us or our products
              and Services, when you participate in activities on the Services, or otherwise when
              you contact us.
            </p>
            <p>
              <br />
            </p>
            <p>
              Personal Information Provided by You.&nbsp;The personal information that we collect
              depends on the context of your interactions with us and the Services, the choices you
              make, and the products and features you use. The personal information we collect may
              include the following:
            </p>
            <ul>
              <li>
                <p>names</p>
              </li>
              <li>
                <p>phone numbers</p>
              </li>
              <li>
                <p>mailing addresses</p>
              </li>
              <li>
                <p>email addresses</p>
              </li>
              <li>
                <p>job titles</p>
              </li>
              <li>
                <p>usernames</p>
              </li>
              <li>
                <p>passwords</p>
              </li>
              <li>
                <p>contact preferences</p>
              </li>
              <li>
                <p>contact or authentication data</p>
              </li>
              <li>
                <p>billing addresses</p>
              </li>
              <li>
                <p>debit/credit card numbers</p>
              </li>
            </ul>
            <p>Sensitive Information.&nbsp; See Personal Information Provided by You</p>
            <p>
              <br />
            </p>
            <p>
              Payment Data.&nbsp;We may collect data necessary to process your payment if you make
              purchases, such as your payment instrument number (such as a credit card number), and
              the security code associated with your payment instrument.
            </p>
            <p>
              <br />
            </p>
            <p>
              Social Media Login Data.&nbsp;We may provide you with the option to register with us
              using your existing social media account details, like your Facebook, Twitter, or
              other social media account. If you choose to register in this way, we will collect the
              information described in the section called &quot;HOW DO WE HANDLE YOUR SOCIAL
              LOGINS?&quot; below.
            </p>
            <p>
              <br />
            </p>
            <p>
              All personal information that you provide to us must be true, complete, and accurate,
              and you must notify us of any changes to such personal information.
            </p>
            <p>
              <br />
            </p>
            <p>Information automatically collected</p>
            <p>
              <br />
            </p>
            <p>
              In Short:&nbsp;Some information &mdash; such as your Internet Protocol (IP) address
              and/or browser and device characteristics &mdash; is collected automatically when you
              visit our Services.
            </p>
            <p>
              <br />
            </p>
            <p>
              We automatically collect certain information when you visit, use, or navigate the
              Services. This information does not reveal your specific identity (like your name or
              contact information) but may include device and usage information, such as your IP
              address, browser and device characteristics, operating system, language preferences,
              referring URLs, device name, country, location, information about how and when you use
              our Services, and other technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our internal analytics
              and reporting purposes.
            </p>
            <p>
              <br />
            </p>
            <p>
              Like many businesses, we also collect information through cookies and similar
              technologies.
            </p>
            <p>
              <br />
            </p>
            <p>The information we collect includes:</p>
            <ul>
              <li>
                <p>
                  Log and Usage Data.&nbsp;Log and usage data is service-related, diagnostic, usage,
                  and performance information our servers automatically collect when you access or
                  use our Services and which we record in log files. Depending on how you interact
                  with us, this log data may include your IP address, device information, browser
                  type, and settings and information about your activity in the Services (such as
                  the date/time stamps associated with your usage, pages and files viewed, searches,
                  and other actions you take such as which features you use), device event
                  information (such as system activity, error reports (sometimes called &quot;crash
                  dumps&quot;), and hardware settings).
                </p>
              </li>
              <li>
                <p>
                  Device Data.&nbsp;We collect device data such as information about your computer,
                  phone, tablet, or other device you use to access the Services. Depending on the
                  device used, this device data may include information such as your IP address (or
                  proxy server), device and application identification numbers, location, browser
                  type, hardware model, Internet service provider and/or mobile carrier, operating
                  system, and system configuration information.
                </p>
              </li>
              <li>
                <p>
                  Location Data.&nbsp;We collect location data such as information about your
                  device&apos;s location, which can be either precise or imprecise. How much
                  information we collect depends on the type and settings of the device you use to
                  access the Services. For example, we may use GPS and other technologies to collect
                  geolocation data that tells us your current location (based on your IP address).
                  You can opt out of allowing us to collect this information either by refusing
                  access to the information or by disabling your Location setting on your device.
                  However, if you choose to opt out, you may not be able to use certain aspects of
                  the Services.
                </p>
              </li>
            </ul>
            <p>Information collected from other sources</p>
            <p>
              <br />
            </p>
            <p>
              In Short:&nbsp;We may collect limited data from public databases, marketing partners,
              social media platforms, and other outside sources.
            </p>
            <p>
              <br />
            </p>
            <p>
              In order to enhance our ability to provide relevant marketing, offers, and services to
              you and update our records, we may obtain information about you from other sources,
              such as public databases, joint marketing partners, affiliate programs, data
              providers, social media platforms, and from other third parties. This information
              includes mailing addresses, job titles, email addresses, phone numbers, intent data
              (or user behavior data), Internet Protocol (IP) addresses, social media profiles,
              social media URLs, and custom profiles, for purposes of targeted advertising and event
              promotion. If you interact with us on a social media platform using your social media
              account (e.g., Facebook or Twitter), we receive personal information about you such as
              your name, email address, and gender. Any personal information that we collect from
              your social media account depends on your social media account&apos;s privacy
              settings.
            </p>
            <p>
              <br />
            </p>
            <p>2. HOW DO WE PROCESS YOUR INFORMATION?</p>
            <p>
              <br />
            </p>
            <p>
              In Short:&nbsp;We process your information to provide, improve, and administer our
              Services, communicate with you, for security and fraud prevention, and to comply with
              law. We may also process your information for other purposes with your consent.
            </p>
            <p>
              <br />
            </p>
            <p>
              We process your personal information for a variety of reasons, depending on how you
              interact with our Services, including:
            </p>
            <ul>
              <li>
                <p>
                  To facilitate account creation and authentication and otherwise manage user
                  accounts.&nbsp;We may process your information so you can create and log in to
                  your account, as well as keep your account in working order.
                </p>
              </li>
              <li>
                <p>
                  To deliver and facilitate delivery of services to the user.&nbsp;We may process
                  your information to provide you with the requested service.
                </p>
              </li>
              <li>
                <p>
                  To respond to user inquiries/offer support to users.&nbsp;We may process your
                  information to respond to your inquiries and solve any potential issues you might
                  have with the requested service.
                </p>
              </li>
              <li>
                <p>
                  To send administrative information to you.&nbsp;We may process your information to
                  send you details about our products and services, changes to our terms and
                  policies, and other similar information.
                </p>
              </li>
              <li>
                <p>
                  To fulfill and manage your orders.&nbsp;We may process your information to fulfill
                  and manage your orders, payments, returns, and exchanges made through the
                  Services.
                </p>
              </li>
              <li>
                <p>
                  To enable user-to-user communications.&nbsp;We may process your information if you
                  choose to use any of our offerings that allow for communication with another user.
                </p>
              </li>
              <li>
                <p>
                  To request feedback.&nbsp;We may process your information when necessary to
                  request feedback and to contact you about your use of our Services.
                </p>
              </li>
              <li>
                <p>
                  To send you marketing and promotional communications.&nbsp;We may process the
                  personal information you send to us for our marketing purposes, if this is in
                  accordance with your marketing preferences. You can opt out of our marketing
                  emails at any time. For more information, see &quot;
                  <a href='https://app.termly.io/document/privacy-policy/d71af248-dc13-4323-990c-6c238ac72804#privacyrights'>
                    WHAT ARE YOUR PRIVACY RIGHTS?
                  </a>
                  &quot; below).
                </p>
              </li>
              <li>
                <p>
                  To deliver targeted advertising to you.&nbsp;We may process your information to
                  develop and display personalized content and advertising tailored to your
                  interests, location, and more.
                </p>
              </li>
              <li>
                <p>
                  To post testimonials.&nbsp;We post testimonials on our Services that may contain
                  personal information.
                </p>
              </li>
              <li>
                <p>
                  To protect our Services.&nbsp;We may process your information as part of our
                  efforts to keep our Services safe and secure, including fraud monitoring and
                  prevention.
                </p>
              </li>
              <li>
                <p>
                  To administer prize draws and competitions.&nbsp;We may process your information
                  to administer prize draws and competitions.
                </p>
              </li>
              <li>
                <p>
                  To evaluate and improve our Services, products, marketing, and your
                  experience.&nbsp;We may process your information when we believe it is necessary
                  to identify usage trends, determine the effectiveness of our promotional
                  campaigns, and to evaluate and improve our Services, products, marketing, and your
                  experience.
                </p>
              </li>
              <li>
                <p>
                  To identify usage trends.&nbsp;We may process information about how you use our
                  Services to better understand how they are being used so we can improve them.
                </p>
              </li>
              <li>
                <p>
                  To determine the effectiveness of our marketing and promotional campaigns.&nbsp;We
                  may process your information to better understand how to provide marketing and
                  promotional campaigns that are most relevant to you.
                </p>
              </li>
              <li>
                <p>
                  To comply with our legal obligations.&nbsp;We may process your information to
                  comply with our legal obligations, respond to legal requests, and exercise,
                  establish, or defend our legal rights.
                </p>
              </li>
            </ul>
            <p>
              <br />
            </p>
            <p>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</p>
            <p>
              <br />
            </p>
            <p>
              In Short:&nbsp;We may share information in specific situations described in this
              section and/or with the following categories of third parties.
            </p>
            <p>
              <br />
            </p>
            <p>
              Vendors, Consultants, and Other Third-Party Service Providers.&nbsp;We may share your
              data with third-party vendors, service providers, contractors, or agents (&quot;third
              parties&quot;) who perform services for us or on our behalf and require access to such
              information to do that work. We have contracts in place with our third parties, which
              are designed to help safeguard your personal information. This means that they cannot
              do anything with your personal information unless we have instructed them to do it.
              They will also not share your personal information with any organization apart from
              us. They also commit to protect the data they hold on our behalf and to retain it for
              the period we instruct. The categories of third parties we may share personal
              information with are as follows:
            </p>
            <ul>
              <li>
                <p>Ad Networks</p>
              </li>
              <li>
                <p>Communication &amp; Collaboration Tools</p>
              </li>
              <li>
                <p>Data Storage Service Providers</p>
              </li>
              <li>
                <p>Government Entities</p>
              </li>
              <li>
                <p>Finance &amp; Accounting Tools</p>
              </li>
              <li>
                <p>Cloud Computing Services</p>
              </li>
              <li>
                <p>Data Analytics Services</p>
              </li>
              <li>
                <p>Payment Processors</p>
              </li>
              <li>
                <p>Product Engineering &amp; Design Tools</p>
              </li>
              <li>
                <p>Sales &amp; Marketing Tools</p>
              </li>
              <li>
                <p>Social Networks</p>
              </li>
              <li>
                <p>Testing Tools</p>
              </li>
              <li>
                <p>User Account Registration &amp; Authentication Services</p>
              </li>
              <li>
                <p>Website Hosting Service Providers</p>
              </li>
              <li>
                <p>Performance Monitoring Tools</p>
              </li>
              <li>
                <p>Order Fulfillment Service Providers</p>
              </li>
              <li>
                <p>Retargeting Platforms</p>
              </li>
              <li>
                <p>Affiliate Marketing Programs</p>
              </li>
            </ul>
            <p>
              <br />
            </p>
            <p>We also may need to share your personal information in the following situations:</p>
            <ul>
              <li>
                <p>
                  Business Transfers.&nbsp;We may share or transfer your information in connection
                  with, or during negotiations of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business to another company.
                </p>
              </li>
              <li>
                <p>
                  Affiliates.&nbsp;We may share your information with our affiliates, in which case
                  we will require those affiliates to honor this privacy notice. Affiliates include
                  our parent company and any subsidiaries, joint venture partners, or other
                  companies that we control or that are under common control with us.
                </p>
              </li>
              <li>
                <p>
                  Business Partners.&nbsp;We may share your information with our business partners
                  to offer you certain products, services, or promotions.
                </p>
              </li>
              <li>
                <p>
                  Other Users.&nbsp;When you share personal information (for example, by posting
                  comments, contributions, or other content to the Services) or otherwise interact
                  with public areas of the Services, such personal information may be viewed by all
                  users and may be publicly made available outside the Services in perpetuity. If
                  you interact with other users of our Services and register for our Services
                  through a social network (such as Facebook), your contacts on the social network
                  will see your name, profile photo, and descriptions of your activity. Similarly,
                  other users will be able to view descriptions of your activity, communicate with
                  you within our Services, and view your profile.
                </p>
              </li>
            </ul>
            <p>
              <br />
            </p>
            <p>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>
            <p>
              <br />
            </p>
            <p>
              In Short:&nbsp;We may use cookies and other tracking technologies to collect and store
              your information.
            </p>
            <p>
              <br />
            </p>
            <p>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to
              access or store information. Specific information about how we use such technologies
              and how you can refuse certain cookies is set out in our Cookie Notice.
            </p>
            <p>
              <br />
            </p>
            <p>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</p>
            <p>
              <br />
            </p>
            <p>
              In Short:&nbsp;If you choose to register or log in to our services using a social
              media account, we may have access to certain information about you.
            </p>
            <p>
              <br />
            </p>
            <p>
              Our Services offer you the ability to register and log in using your third-party
              social media account details (like your Facebook or Twitter logins). Where you choose
              to do this, we will receive certain profile information about you from your social
              media provider. The profile information we receive may vary depending on the social
              media provider concerned, but will often include your name, email address, friends
              list, and profile picture, as well as other information you choose to make public on
              such a social media platform.
            </p>
            <p>
              <br />
            </p>
            <p>
              We will use the information we receive only for the purposes that are described in
              this privacy notice or that are otherwise made clear to you on the relevant Services.
              Please note that we do not control, and are not responsible for, other uses of your
              personal information by your third-party social media provider. We recommend that you
              review their privacy notice to understand how they collect, use, and share your
              personal information, and how you can set your privacy preferences on their sites and
              apps.
            </p>
            <p>
              <br />
            </p>
            <p>6. HOW LONG DO WE KEEP YOUR INFORMATION?</p>
            <p>
              <br />
            </p>
            <p>
              In Short:&nbsp;We keep your information for as long as necessary to fulfill the
              purposes outlined in this privacy notice unless otherwise required by law.
            </p>
            <p>
              <br />
            </p>
            <p>
              We will only keep your personal information for as long as it is necessary for the
              purposes set out in this privacy notice, unless a longer retention period is required
              or permitted by law (such as tax, accounting, or other legal requirements). No purpose
              in this notice will require us keeping your personal information for longer than the
              period of time in which users have an account with us.
            </p>
            <p>
              <br />
            </p>
            <p>
              When we have no ongoing legitimate business need to process your personal information,
              we will either delete or anonymize such information, or, if this is not possible (for
              example, because your personal information has been stored in backup archives), then
              we will securely store your personal information and isolate it from any further
              processing until deletion is possible.
            </p>
            <p>
              <br />
            </p>
            <p>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</p>
            <p>
              <br />
            </p>
            <p>
              In Short:&nbsp;We aim to protect your personal information through a system of
              organizational and technical security measures.
            </p>
            <p>
              <br />
            </p>
            <p>
              We have implemented appropriate and reasonable technical and organizational security
              measures designed to protect the security of any personal information we process.
              However, despite our safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology can be guaranteed to
              be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or
              other unauthorized third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information. Although we will do our
              best to protect your personal information, transmission of personal information to and
              from our Services is at your own risk. You should only access the Services within a
              secure environment.
            </p>
            <p>
              <br />
            </p>
            <p>8. DO WE COLLECT INFORMATION FROM MINORS?</p>
            <p>
              <br />
            </p>
            <p>
              In Short:&nbsp;We do not knowingly collect data from or market to children under 18
              years of age.
            </p>
            <p>
              <br />
            </p>
            <p>
              We do not knowingly solicit data from or market to children under 18 years of age. By
              using the Services, you represent that you are at least 18 or that you are the parent
              or guardian of such a minor and consent to such minor dependent&rsquo;s use of the
              Services. If we learn that personal information from users less than 18 years of age
              has been collected, we will deactivate the account and take reasonable measures to
              promptly delete such data from our records. If you become aware of any data we may
              have collected from children under age 18, please contact us at
              support@bestimate.tech.
            </p>
            <p>
              <br />
            </p>
            <p>9. WHAT ARE YOUR PRIVACY RIGHTS?</p>
            <p>
              <br />
            </p>
            <p>In Short:&nbsp; You may review, change, or terminate your account at any time.</p>
            <p>&nbsp;</p>
            <p>
              If you are located in the EEA or UK and you believe we are unlawfully processing your
              personal information, you also have the right to complain to your local data
              protection supervisory authority. You can find their contact details here:&nbsp;
              <a href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'>
                https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
              </a>
              .
            </p>
            <p>
              <br />
            </p>
            <p>
              If you are located in Switzerland, the contact details for the data protection
              authorities are available here:&nbsp;
              <a href='https://www.edoeb.admin.ch/edoeb/en/home.html'>
                https://www.edoeb.admin.ch/edoeb/en/home.html
              </a>
              .
            </p>
            <p>
              <br />
            </p>
            <p>
              Withdrawing your consent:&nbsp;If we are relying on your consent to process your
              personal information, which may be express and/or implied consent depending on the
              applicable law, you have the right to withdraw your consent at any time. You can
              withdraw your consent at any time by contacting us by using the contact details
              provided in the section &quot;
              <a href='https://app.termly.io/document/privacy-policy/d71af248-dc13-4323-990c-6c238ac72804#contact'>
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
              &quot; below.
            </p>
            <p>
              <br />
            </p>
            <p>
              However, please note that this will not affect the lawfulness of the processing before
              its withdrawal, nor when applicable law allows, will it affect the processing of your
              personal information conducted in reliance on lawful processing grounds other than
              consent.
            </p>
            <p>
              <br />
            </p>
            <p>
              Opting out of marketing and promotional communications:&nbsp;You can unsubscribe from
              our marketing and promotional communications at any time by clicking on the
              unsubscribe link in the emails that we send, replying &quot;STOP&quot; or
              &quot;UNSUBSCRIBE&quot; to the SMS messages that we send, or by contacting us using
              the details provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS
              NOTICE?&quot; below. You will then be removed from the marketing lists. However, we
              may still communicate with you &mdash; for example, to send you service-related
              messages that are necessary for the administration and use of your account, to respond
              to service requests, or for other non-marketing purposes.
            </p>
            <p>
              <br />
            </p>
            <p>Account Information</p>
            <p>
              <br />
            </p>
            <p>
              If you would at any time like to review or change the information in your account or
              terminate your account, you can:
            </p>
            <ul>
              <li>
                <p>Log in to your account settings and update your user account.</p>
              </li>
            </ul>
            <p>
              Upon your request to terminate your account, we will deactivate or delete your account
              and information from our active databases. However, we may retain some information in
              our files to prevent fraud, troubleshoot problems, assist with any investigations,
              enforce our legal terms and/or comply with applicable legal requirements.
            </p>
            <p>
              <br />
            </p>
            <p>
              Cookies and similar technologies:&nbsp;Most Web browsers are set to accept cookies by
              default. If you prefer, you can usually choose to set your browser to remove cookies
              and to reject cookies. If you choose to remove cookies or reject cookies, this could
              affect certain features or services of our Services. To opt out of interest-based
              advertising by advertisers on our Services visit&nbsp;
              <a href='http://www.aboutads.info/choices/'>http://www.aboutads.info/choices/</a>.
            </p>
            <p>
              <br />
            </p>
            <p>
              If you have questions or comments about your privacy rights, you may email us at
              support@bestimate.tech.
            </p>
            <p>
              <br />
            </p>
            <p>10. CONTROLS FOR DO-NOT-TRACK FEATURES</p>
            <p>
              <br />
            </p>
            <p>
              Most web browsers and some mobile operating systems and mobile applications include a
              Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your
              privacy preference not to have data about your online browsing activities monitored
              and collected. At this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not currently respond to
              DNT browser signals or any other mechanism that automatically communicates your choice
              not to be tracked online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a revised version of
              this privacy notice.
            </p>
            <p>
              <br />
            </p>
            <p>11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</p>
            <p>
              <br />
            </p>
            <p>
              In Short:&nbsp;Yes, if you are a resident of California, you are granted specific
              rights regarding access to your personal information.
            </p>
            <p>
              <br />
            </p>
            <p>
              California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot;
              law, permits our users who are California residents to request and obtain from us,
              once a year and free of charge, information about categories of personal information
              (if any) we disclosed to third parties for direct marketing purposes and the names and
              addresses of all third parties with which we shared personal information in the
              immediately preceding calendar year. If you are a California resident and would like
              to make such a request, please submit your request in writing to us using the contact
              information provided below.
            </p>
            <p>
              <br />
            </p>
            <p>
              If you are under 18 years of age, reside in California, and have a registered account
              with Services, you have the right to request removal of unwanted data that you
              publicly post on the Services. To request removal of such data, please contact us
              using the contact information provided below and include the email address associated
              with your account and a statement that you reside in California. We will make sure the
              data is not publicly displayed on the Services, but please be aware that the data may
              not be completely or comprehensively removed from all our systems (e.g., backups,
              etc.).
            </p>
            <p>
              <br />
            </p>
            <p>CCPA Privacy Notice</p>
            <p>
              <br />
            </p>
            <p>The California Code of Regulations defines a &quot;resident&quot; as:</p>
            <p>
              <br />
            </p>
            <p>
              (1) every individual who is in the State of California for other than a temporary or
              transitory purpose and
            </p>
            <p>
              (2) every individual who is domiciled in the State of California who is outside the
              State of California for a temporary or transitory purpose
            </p>
            <p>
              <br />
            </p>
            <p>All other individuals are defined as &quot;non-residents.&quot;</p>
            <p>
              <br />
            </p>
            <p>
              If this definition of &quot;resident&quot; applies to you, we must adhere to certain
              rights and obligations regarding your personal information.
            </p>
            <p>
              <br />
            </p>
            <p>What categories of personal information do we collect?</p>
            <p>
              <br />
            </p>
            <p>
              We have collected the following categories of personal information in the past twelve
              (12) months:
            </p>
            <p>
              <br />
            </p>
            <div align='left'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Category</p>
                    </td>
                    <td>
                      <p>Examples</p>
                    </td>
                    <td>
                      <p>Collected</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A. Identifiers</p>
                    </td>
                    <td>
                      <p>
                        Contact details, such as real name, alias, postal address, telephone or
                        mobile contact number, unique personal identifier, online identifier,
                        Internet Protocol address, email address, and account name
                      </p>
                    </td>
                    <td>
                      <br />
                      <p>YES</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        B. Personal information categories listed in the California Customer Records
                        statute
                      </p>
                    </td>
                    <td>
                      <p>
                        Name, contact information, education, employment, employment history, and
                        financial information
                      </p>
                    </td>
                    <td>
                      <br />
                      <p>YES</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        C. Protected classification characteristics under California or federal law
                      </p>
                    </td>
                    <td>
                      <p>Gender and date of birth</p>
                    </td>
                    <td>
                      <br />
                      <p>YES</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>D. Commercial information</p>
                    </td>
                    <td>
                      <p>
                        Transaction information, purchase history, financial details, and payment
                        information
                      </p>
                    </td>
                    <td>
                      <br />
                      <p>NO</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>E. Biometric information</p>
                    </td>
                    <td>
                      <p>Fingerprints and voiceprints</p>
                    </td>
                    <td>
                      <br />
                      <p>NO</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>F. Internet or other similar network activity</p>
                    </td>
                    <td>
                      <p>
                        Browsing history, search history, online behavior, interest data, and
                        interactions with our and other websites, applications, systems, and
                        advertisements
                      </p>
                    </td>
                    <td>
                      <br />
                      <p>NO</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>G. Geolocation data</p>
                    </td>
                    <td>
                      <p>Device location</p>
                    </td>
                    <td>
                      <br />
                      <p>NO</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        H. Audio, electronic, visual, thermal, olfactory, or similar information
                      </p>
                    </td>
                    <td>
                      <p>
                        Images and audio, video or call recordings created in connection with our
                        business activities
                      </p>
                    </td>
                    <td>
                      <br />
                      <p>NO</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>I. Professional or employment-related information</p>
                    </td>
                    <td>
                      <p>
                        Business contact details in order to provide you our services at a business
                        level or job title, work history, and professional qualifications if you
                        apply for a job with us
                      </p>
                    </td>
                    <td>
                      <br />
                      <p>YES</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>J. Education Information</p>
                    </td>
                    <td>
                      <p>Student records and directory information</p>
                    </td>
                    <td>
                      <br />
                      <p>NO</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>K. Inferences drawn from other personal information</p>
                    </td>
                    <td>
                      <p>
                        Inferences drawn from any of the collected personal information listed above
                        to create a profile or summary about, for example, an individual&rsquo;s
                        preferences and characteristics
                      </p>
                    </td>
                    <td>
                      <br />
                      <p>YES</p>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <br />
            </p>
            <p>
              We may also collect other personal information outside of these categories instances
              where you interact with us in person, online, or by phone or mail in the context of:
            </p>
            <ul>
              <li>
                <p>Receiving help through our customer support channels;</p>
              </li>
              <li>
                <p>Participation in customer surveys or contests; and</p>
              </li>
              <li>
                <p>
                  Facilitation in the delivery of our Services and to respond to your inquiries.
                </p>
              </li>
            </ul>
            <p>How do we use and share your personal information?</p>
            <p>
              <br />
            </p>
            <p>CanYou Inc. collects and shares your personal information through:</p>
            <ul>
              <li>
                <p>Targeting cookies/Marketing cookies</p>
              </li>
              <li>
                <p>Social media cookies</p>
              </li>
              <li>
                <p>Beacons/Pixels/Tags</p>
              </li>
            </ul>
            <p>
              More information about our data collection and sharing practices can be found in this
              privacy notice.
            </p>
            <p>
              <br />
            </p>
            <p>
              You may contact us by email at support@bestimate.tech,&nbsp;or by referring to the
              contact details at the bottom of this document.
            </p>
            <p>
              <br />
            </p>
            <p>
              If you are using an authorized agent to exercise your right to opt out we may deny a
              request if the authorized agent does not submit proof that they have been validly
              authorized to act on your behalf.
            </p>
            <p>
              <br />
            </p>
            <p>Will your information be shared with anyone else?</p>
            <p>
              <br />
            </p>
            <p>
              We may disclose your personal information with our service providers pursuant to a
              written contract between us and each service provider. Each service provider is a
              for-profit entity that processes the information on our behalf.
            </p>
            <p>
              <br />
            </p>
            <p>
              We may use your personal information for our own business purposes, such as for
              undertaking internal research for technological development and demonstration. This is
              not considered to be &quot;selling&quot; of your personal information.
            </p>
            <p>
              <br />
            </p>
            <p>
              CanYou Inc. has not sold any personal information to third parties for a business or
              commercial purpose in the preceding twelve (12) months.&nbsp;CanYou Inc. has disclosed
              the following categories of personal information to third parties for a business or
              commercial purpose in the preceding twelve (12) months:
            </p>
            <ul>
              <li>
                <p>
                  Category A. Identifiers, such as contact details like your real name, alias,
                  postal address, telephone or mobile contact number, unique personal identifier,
                  online identifier, Internet Protocol address, email address, and account name.
                </p>
              </li>
              <li>
                <p>
                  Category B. Personal information, as defined in the California Customer Records
                  law, such as your name, contact information, education, employment, employment
                  history, and financial information.
                </p>
              </li>
              <li>
                <p>
                  Category C. Characteristics of protected classifications under California or
                  federal law, such as gender or date of birth.
                </p>
              </li>
              <li>
                <p>
                  Category I. Professional or employment-related information, such as business
                  contact details in order to provide you our services at a business level or job
                  title, work history, and professional qualifications if you apply for a job with
                  us.
                </p>
              </li>
              <li>
                <p>
                  Category K. Inferences drawn from any of the personal information listed above to
                  create a profile or summary about, for example, an individual&apos;s preferences
                  and characteristics.
                </p>
              </li>
            </ul>
            <p>
              The categories of third parties to whom we disclosed personal information for a
              business or commercial purpose can be found under &quot;WHEN AND WITH WHOM DO WE SHARE
              YOUR PERSONAL INFORMATION?&quot;.
            </p>
            <p>
              <br />
            </p>
            <p>Your rights with respect to your personal data</p>
            <p>
              <br />
            </p>
            <p>Right to request deletion of the data &mdash; Request to delete</p>
            <p>
              <br />
            </p>
            <p>
              You can ask for the deletion of your personal information. If you ask us to delete
              your personal information, we will respect your request and delete your personal
              information, subject to certain exceptions provided by law, such as (but not limited
              to) the exercise by another consumer of his or her right to free speech, our
              compliance requirements resulting from a legal obligation, or any processing that may
              be required to protect against illegal activities.
            </p>
            <p>
              <br />
            </p>
            <p>Right to be informed &mdash; Request to know</p>
            <p>
              <br />
            </p>
            <p>Depending on the circumstances, you have a right to know:</p>
            <ul>
              <li>
                <p>whether we collect and use your personal information;</p>
              </li>
              <li>
                <p>the categories of personal information that we collect;</p>
              </li>
              <li>
                <p>the purposes for which the collected personal information is used;</p>
              </li>
              <li>
                <p>whether we sell your personal information to third parties;</p>
              </li>
              <li>
                <p>
                  the categories of personal information that we sold or disclosed for a business
                  purpose;
                </p>
              </li>
              <li>
                <p>
                  the categories of third parties to whom the personal information was sold or
                  disclosed for a business purpose; and
                </p>
              </li>
              <li>
                <p>
                  the business or commercial purpose for collecting or selling personal information.
                </p>
              </li>
            </ul>
            <p>
              In accordance with applicable law, we are not obligated to provide or delete consumer
              information that is de-identified in response to a consumer request or to re-identify
              individual data to verify a consumer request.
            </p>
            <p>
              <br />
            </p>
            <p>Right to Non-Discrimination for the Exercise of a Consumer&rsquo;s Privacy Rights</p>
            <p>
              <br />
            </p>
            <p>We will not discriminate against you if you exercise your privacy rights.</p>
            <p>
              <br />
            </p>
            <p>Verification process</p>
            <p>
              <br />
            </p>
            <p>
              Upon receiving your request, we will need to verify your identity to determine you are
              the same person about whom we have the information in our system. These verification
              efforts require us to ask you to provide information so that we can match it with
              information you have previously provided us. For instance, depending on the type of
              request you submit, we may ask you to provide certain information so that we can match
              the information you provide with the information we already have on file, or we may
              contact you through a communication method (e.g., phone or email) that you have
              previously provided to us. We may also use other verification methods as the
              circumstances dictate.
            </p>
            <p>
              <br />
            </p>
            <p>
              We will only use personal information provided in your request to verify your identity
              or authority to make the request. To the extent possible, we will avoid requesting
              additional information from you for the purposes of verification. However, if we
              cannot verify your identity from the information already maintained by us, we may
              request that you provide additional information for the purposes of verifying your
              identity and for security or fraud-prevention purposes. We will delete such
              additionally provided information as soon as we finish verifying you.
            </p>
            <p>
              <br />
            </p>
            <p>Other privacy rights</p>
            <ul>
              <li>
                <p>You may object to the processing of your personal information.</p>
              </li>
              <li>
                <p>
                  You may request correction of your personal data if it is incorrect or no longer
                  relevant, or ask to restrict the processing of the information.
                </p>
              </li>
              <li>
                <p>
                  You can designate an authorized agent to make a request under the CCPA on your
                  behalf. We may deny a request from an authorized agent that does not submit proof
                  that they have been validly authorized to act on your behalf in accordance with
                  the CCPA.
                </p>
              </li>
              <li>
                <p>
                  You may request to opt out from future selling of your personal information to
                  third parties. Upon receiving an opt-out request, we will act upon the request as
                  soon as feasibly possible, but no later than fifteen (15) days from the date of
                  the request submission.
                </p>
              </li>
            </ul>
            <p>
              To exercise these rights, you can contact us by email at
              support@bestimate.tech,&nbsp;or by referring to the contact details at the bottom of
              this document. If you have a complaint about how we handle your data, we would like to
              hear from you.
            </p>
            <p>
              <br />
            </p>
            <p>12. DO WE MAKE UPDATES TO THIS NOTICE?</p>
            <p>
              <br />
            </p>
            <p>
              In Short:&nbsp;Yes, we will update this notice as necessary to stay compliant with
              relevant laws.
            </p>
            <p>
              <br />
            </p>
            <p>
              We may update this privacy notice from time to time. The updated version will be
              indicated by an updated &quot;Revised&quot; date and the updated version will be
              effective as soon as it is accessible. If we make material changes to this privacy
              notice, we may notify you either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review this privacy notice
              frequently to be informed of how we are protecting your information.
            </p>
            <p>
              <br />
            </p>
            <p>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p>
            <p>
              <br />
            </p>
            <p>
              If you have questions or comments about this notice, you may email us at
              support@bestimate.tech or by post to:
            </p>
            <p>
              <br />
            </p>
            <p>CanYou Inc.</p>
            <p>30 N Gould St Ste R</p>
            <p>Sheridan, WY 82801</p>
            <p>United States</p>
            <p>
              <br />
            </p>
            <p>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</p>
            <p>
              <br />
            </p>
            <p>
              Based on the applicable laws of your country, you may have the right to request access
              to the personal information we collect from you, change that information, or delete
              it. To request to review, update, or delete your personal information, please submit a
              request by sending an email to&nbsp;
              <a href='mailto:support@canyouapp.com'>support@canyouapp.com</a> with the subject:
              &ldquo;ATTN: Privacy&rdquo;.
            </p>
            <p>
              <br />
            </p>
          </Box>
        </Grid>
      </Grid>
    </MuiContainer>
  )
}

export default Privacy
