# Quick Cloudflare Setup - haal-lab.solutions

## 🚀 Fast Track Setup (5 Minutes)

### 1. Add Site to Cloudflare
- Go to: https://dash.cloudflare.com/
- Click "Add Site" → Enter `haal-lab.solutions`
- Select **Free Plan**

### 2. Add These DNS Records

**In Cloudflare Dashboard → DNS → Records:**

```
Type: A     | Name: @   | Content: 185.199.108.153 | Proxy: ON (🟠)
Type: A     | Name: @   | Content: 185.199.109.153 | Proxy: ON (🟠)
Type: A     | Name: @   | Content: 185.199.110.153 | Proxy: ON (🟠)
Type: A     | Name: @   | Content: 185.199.111.153 | Proxy: ON (🟠)
Type: CNAME | Name: www | Content: nazary475.github.io | Proxy: ON (🟠)
```

### 3. Update Nameservers
Copy the 2 nameservers Cloudflare gives you (like `name1.ns.cloudflare.com`)

Go to your domain registrar and replace nameservers with Cloudflare's.

### 4. Configure SSL in Cloudflare
- Go to: **SSL/TLS → Overview**
- Set to: **Full** or **Full (strict)**
- Enable: **Always Use HTTPS** (in Edge Certificates)

### 5. Configure GitHub Pages
- Go to: https://github.com/nazary475/haal/settings/pages
- Source: **GitHub Actions**
- Custom domain: `haal-lab.solutions`
- Enable: **Enforce HTTPS** (after DNS propagates)

### 6. Wait & Test
- DNS propagation: 5 minutes to 24 hours
- Test: https://haal-lab.solutions
- Test: https://www.haal-lab.solutions

---

## ✅ Verification Checklist

- [ ] DNS records added in Cloudflare
- [ ] Nameservers updated at domain registrar
- [ ] SSL set to "Full" in Cloudflare
- [ ] "Always Use HTTPS" enabled
- [ ] Custom domain set in GitHub Pages
- [ ] Website accessible at https://haal-lab.solutions
- [ ] HTTPS working properly (green padlock)
- [ ] robots.txt accessible: https://haal-lab.solutions/robots.txt
- [ ] sitemap.xml accessible: https://haal-lab.solutions/sitemap.xml

---

## 🆘 Common Issues

**"Domain's DNS record could not be retrieved"**
→ Wait longer (up to 24 hours) or check nameservers

**"Not Secure" warning**
→ Wait for GitHub to provision SSL (up to 24 hours)

**404 Error**
→ Check GitHub Actions completed successfully
→ Verify CNAME file contains: `haal-lab.solutions`

**Cached old content**
→ Cloudflare Dashboard → Caching → Purge Everything

---

## 📞 Need Help?

Full guide: See `CLOUDFLARE-SETUP.md`
Check DNS: https://www.whatsmydns.net/
Test SSL: https://www.ssllabs.com/ssltest/

**Repository**: https://github.com/nazary475/haal
