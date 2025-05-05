<script>
  // Contact information
  const contactInfo = {
    email: 'hello@bitbyteslab.com',
    phone: '078389 89113',
    address: 'Daftar Co-working, Gujranwalan town, Delhi, India, Delhi'
  };
</script>

<div class="contact-info">
  <p>Email: <a href="mailto:{contactInfo.email}">{contactInfo.email}</a></p>
  <p>Phone: {contactInfo.phone}</p>
  <p>Address: {contactInfo.address}</p>
  <a href="/contactus" class="btn btn-primary">Contact Us</a>
</div>
