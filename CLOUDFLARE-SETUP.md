# Cloudflare + GitHub Pages Setup Guide

Complete guide to connect `haal-lab.solutions` to GitHub Pages via Cloudflare.

## Prerequisites
- ✅ Domain: `haal-lab.solutions`
- ✅ GitHub Repository: `https://github.com/nazary475/haal`
- ✅ Cloudflare Account (free tier works)

---

## Step 1: Add Domain to Cloudflare

1. **Login to Cloudflare**: https://dash.cloudflare.com/
2. **Add a Site**:
   - Click "Add a Site" or "Add Site"
   - Enter: `haal-lab.solutions`
   - Select Plan: **Free** (sufficient for most needs)
   - Click "Add Site"

3. **Cloudflare will scan your existing DNS records**
   - Review them (if any exist)
   - Click "Continue"

---

## Step 2: Configure DNS Records in Cloudflare

Go to: **DNS > Records** in your Cloudflare dashboard

### Required DNS Records:

#### A Records (GitHub Pages IPs)
Add these 4 A records pointing to GitHub Pages:

| Type | Name | IPv4 Address | Proxy Status | TTL |
|------|------|--------------|--------------|-----|
| A | @ | `185.199.108.153` | Proxied (🟠) | Auto |
| A | @ | `185.199.109.153` | Proxied (🟠) | Auto |
| A | @ | `185.199.110.153` | Proxied (🟠) | Auto |
| A | @ | `185.199.111.153` | Proxied (🟠) | Auto |

#### CNAME Record (www subdomain)
Add this CNAME record:

| Type | Name | Target | Proxy Status | TTL |
|------|------|--------|--------------|-----|
| CNAME | www | `nazary475.github.io` | Proxied (🟠) | Auto |

**Important**: Make sure "Proxy status" is **Proxied** (orange cloud icon) for both A and CNAME records.

---

## Step 3: Update Nameservers at Your Domain Registrar

Cloudflare will provide you with 2 nameservers like:
```
name1.ns.cloudflare.com
name2.ns.cloudflare.com
```

### Update Your Domain's Nameservers:
1. Login to your **domain registrar** (where you bought the domain)
2. Find DNS/Nameserver settings
3. Replace existing nameservers with Cloudflare's nameservers
4. Save changes

**Note**: DNS propagation can take 24-48 hours (usually much faster)

---

## Step 4: Configure Cloudflare SSL/TLS

Go to: **SSL/TLS > Overview**

### Set SSL/TLS Encryption Mode:
- Select: **Full (strict)** or **Full**
- This ensures HTTPS works properly

### Enable Always Use HTTPS:
1. Go to: **SSL/TLS > Edge Certificates**
2. Enable: **Always Use HTTPS**
3. Enable: **Automatic HTTPS Rewrites**
4. Enable: **Minimum TLS Version**: TLS 1.2 (recommended)

---

## Step 5: Configure GitHub Pages

1. **Go to Repository Settings**:
   - https://github.com/nazary475/haal/settings/pages

2. **Configure Pages**:
   - **Source**: GitHub Actions (should already be set)
   - **Custom domain**: Enter `haal-lab.solutions`
   - Click "Save"
   - ☑️ Check "Enforce HTTPS" (wait for DNS to propagate first)

3. **Wait for DNS Check**:
   - GitHub will verify your domain
   - This can take a few minutes to a few hours
   - Once verified, you'll see a green checkmark ✅

---

## Step 6: Cloudflare Performance & Security Settings (Optional)

### Performance Optimization:

#### Go to: **Speed > Optimization**
- ✅ Enable: Auto Minify (CSS, JavaScript, HTML)
- ✅ Enable: Brotli compression
- ✅ Enable: Rocket Loader (optional - test first)
- ✅ Enable: Early Hints

#### Go to: **Caching > Configuration**
- **Browser Cache TTL**: 4 hours or higher
- **Caching Level**: Standard

#### Create Page Rules (Optional):
Go to: **Rules > Page Rules**

**Rule 1: Cache Everything**
```
URL Pattern: haal-lab.solutions/*
Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 month
  - Browser Cache TTL: 4 hours
```

### Security Settings:

#### Go to: **Security > Settings**
- **Security Level**: Medium
- Enable: **Browser Integrity Check**
- Enable: **Challenge Passage**: 30 minutes

#### Go to: **Security > Bots**
- Enable: **Bot Fight Mode** (Free plan)
- Or upgrade to: **Super Bot Fight Mode** (Paid plans)

---

## Step 7: Verify Deployment

### Check DNS Propagation:
Use: https://www.whatsmydns.net/
- Enter: `haal-lab.solutions`
- Should show GitHub Pages IPs globally

### Test Your Website:
1. **Apex Domain**: https://haal-lab.solutions
2. **WWW Subdomain**: https://www.haal-lab.solutions
3. **HTTP Redirect**: http://haal-lab.solutions (should redirect to HTTPS)

### Verify SEO Files:
- **Robots.txt**: https://haal-lab.solutions/robots.txt
- **Sitemap**: https://haal-lab.solutions/sitemap.xml
- **All Languages**: 
  - https://haal-lab.solutions/en
  - https://haal-lab.solutions/de
  - https://haal-lab.solutions/fr
  - https://haal-lab.solutions/es
  - https://haal-lab.solutions/it

---

## Step 8: Post-Launch Checklist

### SEO & Analytics:
- [ ] Submit sitemap to Google Search Console: `https://haal-lab.solutions/sitemap.xml`
- [ ] Verify domain in Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Set up Google Analytics (optional)
- [ ] Set up Cloudflare Analytics (included free)

### Performance Testing:
- [ ] Test on: https://pagespeed.web.dev/
- [ ] Test on: https://gtmetrix.com/
- [ ] Test on: https://webpagetest.org/

### Security Testing:
- [ ] SSL Test: https://www.ssllabs.com/ssltest/
- [ ] Security Headers: https://securityheaders.com/

---

## Troubleshooting

### Issue: "Domain's DNS record could not be retrieved"
**Solution**: 
- Wait 24-48 hours for DNS propagation
- Verify nameservers are correctly set at registrar
- Check DNS records in Cloudflare are correct

### Issue: "Certificate error" or "Not Secure"
**Solution**:
- Wait for GitHub to provision SSL certificate (can take hours)
- Ensure "Always Use HTTPS" is enabled in Cloudflare
- Try disabling and re-enabling Cloudflare proxy temporarily

### Issue: "404 - There isn't a GitHub Pages site here"
**Solution**:
- Verify CNAME file exists in `public/CNAME` with `haal-lab.solutions`
- Check GitHub Actions workflow completed successfully
- Verify custom domain is set in GitHub Pages settings

### Issue: Cloudflare showing cached old version
**Solution**:
- Go to Cloudflare: **Caching > Configuration**
- Click: **Purge Everything**
- Wait 1-2 minutes and refresh

---

## Cloudflare Benefits

✅ **Performance**:
- Global CDN with 200+ data centers
- Automatic minification and compression
- HTTP/3 and QUIC support
- Fast DNS resolution

✅ **Security**:
- DDoS protection
- Web Application Firewall (WAF)
- Bot protection
- SSL/TLS encryption

✅ **Reliability**:
- 100% uptime SLA
- Automatic failover
- Load balancing

✅ **Analytics**:
- Visitor statistics
- Bandwidth usage
- Security insights
- Performance metrics

---

## Summary

Your setup architecture:
```
User Request
    ↓
Cloudflare DNS (haal-lab.solutions)
    ↓
Cloudflare CDN/Proxy (Performance + Security)
    ↓
GitHub Pages (nazary475.github.io/haal)
    ↓
Static HTML/CSS/JS (Next.js Static Export)
```

**Estimated Setup Time**: 30 minutes to 24 hours (depending on DNS propagation)

---

## Support Resources

- **Cloudflare Docs**: https://developers.cloudflare.com/
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **DNS Checker**: https://www.whatsmydns.net/
- **Cloudflare Community**: https://community.cloudflare.com/

---

**Last Updated**: July 14, 2026
**Repository**: https://github.com/nazary475/haal
**Website**: https://haal-lab.solutions
