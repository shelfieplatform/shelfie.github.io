# Help Center Implementation Prompt

## Project Overview
Create a comprehensive help center for Shelfie - a social media platform for sharing favorite books, songs, series, and movies. The help center should be similar to help.x.com with search functionality using Algolia DocSearch.

## Shelfie Platform Context

### What is Shelfie?
Shelfie is a social media platform that allows users to curate and share their favorite books, music, movies, and TV shows. Unlike traditional social media focused on personal updates, Shelfie is centered around content discovery and sharing your "digital shelf" of favorites.

### Core Platform Features

#### User Profiles & Social Features
- **User Profiles**: Users create profiles with bios, profile pictures, and personal information
- **Following System**: Users can follow other users to see their favorite content updates
- **Followers**: Users can have followers who see their content updates
- **Username System**: Unique usernames with verification badges for celebrities, brands, organizations
- **Privacy Settings**: Control who can see your profile, favorites, and activity
- **Blocking & Reporting**: Users can block other users and report inappropriate content

#### Content Management
- **Favorites System**: Users add books, movies, TV shows, and music to their "shelf"
- **Content Categories**: 
  - Books (with ISBN support, reading status, ratings)
  - Movies (with TMDb integration, watch status, ratings)
  - TV Shows (episode tracking, season management)
  - Music (Spotify integration, song/album tracking)
- **Custom Lists**: Users can create custom collections (e.g., "Summer Reads", "Horror Movies")
- **Import Functionality**: Import existing lists from other platforms (Goodreads, Letterboxd, etc.)
- **Rating & Review System**: Rate and review content with written reviews
- **Recommendation Engine**: AI-powered content recommendations based on preferences

#### Platform-Specific Features
- **Mobile App**: Native iOS and Android apps with full functionality
- **Web Platform**: Responsive web application
- **Real-time Updates**: Live notifications for follows, likes, comments
- **Search & Discovery**: Advanced search for content and users
- **Content Verification**: Verified badges for celebrities, brands, organizations
- **Admin Panel**: Administrative tools for content moderation and user management

#### Technical Infrastructure
- **Backend**: Node.js/Express API server on AWS EC2
- **Database**: MongoDB Atlas for data storage
- **Authentication**: JWT-based authentication with email verification
- **File Storage**: AWS S3 for profile pictures and content images
- **Email Service**: AWS SES for transactional emails
- **CDN**: CloudFlare for global content delivery
- **Real-time**: Socket.io for live notifications and messaging

#### User Journey Context
1. **Registration**: Users sign up with email, choose username, verify email
2. **Profile Setup**: Add profile picture, bio, interests, privacy settings
3. **Content Addition**: Start adding favorite books, movies, music, TV shows
4. **Social Discovery**: Find and follow other users with similar interests
5. **Content Sharing**: Share favorites, create lists, write reviews
6. **Community Engagement**: Like, comment, and interact with other users' content
7. **Discovery**: Use recommendation engine to find new content
8. **Privacy Management**: Control who sees what content and activity

#### Content Types & Sources
- **Books**: Google Books API integration, ISBN scanning, manual addition
- **Movies/TV**: TMDb API integration, comprehensive movie/TV database
- **Music**: Spotify API integration, song and album tracking
- **User-Generated**: Custom content, reviews, ratings, personal lists

#### Platform Moderation
- **Content Moderation**: Admin tools for reviewing reported content
- **User Verification**: System for verifying celebrity/brand accounts
- **Spam Prevention**: Automated systems to prevent spam and abuse
- **Community Guidelines**: Clear rules for user behavior and content

#### Mobile App Features
- **Native Experience**: Full-featured mobile apps for iOS and Android
- **Offline Support**: Basic functionality when offline
- **Push Notifications**: Real-time notifications for social interactions
- **Camera Integration**: Photo capture for profile pictures and content
- **Share Functionality**: Share content to other apps and social media

#### Web Platform Features
- **Responsive Design**: Works on desktop, tablet, and mobile browsers
- **Progressive Web App**: App-like experience in browsers
- **Social Login**: Optional social media login integration
- **Advanced Search**: Comprehensive search across all content types
- **Bulk Operations**: Import/export large lists of favorites

### User Personas & Use Cases

#### New User (Getting Started)
- Wants to discover new books, movies, music
- Looking for recommendations based on preferences
- Wants to connect with others who share similar interests
- Needs help setting up profile and understanding platform

#### Power User (Advanced Features)
- Has extensive collections across multiple platforms
- Wants to import existing lists from other services
- Interested in creating custom lists and sharing them
- Uses advanced search and filtering options

#### Content Creator (Sharing & Discovery)
- Writes detailed reviews and recommendations
- Creates themed lists (e.g., "Best Sci-Fi Books of 2024")
- Wants to build a following of users interested in their recommendations
- Uses platform for content discovery and curation

#### Social User (Community Features)
- Primarily interested in following friends and influencers
- Wants to see what others are reading/watching/listening to
- Engages with community through likes, comments, shares
- Uses platform as social discovery tool

### Platform-Specific Terminology
- **Shelf**: User's collection of favorite content
- **Favorites**: Individual items (books, movies, music, TV shows) added to shelf
- **Lists**: Custom collections created by users
- **Following**: Users you follow to see their updates
- **Followers**: Users who follow you to see your updates
- **Verification Badge**: Special badge for verified accounts (celebrities, brands, etc.)
- **Recommendations**: AI-suggested content based on your preferences
- **Activity Feed**: Timeline of updates from users you follow
- **Profile**: User's public page with bio, favorites, and activity
- **Privacy Settings**: Controls for who can see your content and activity

## Technical Requirements

### Framework & Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Search**: Algolia DocSearch (free tier: 10,000 searches/month)
- **Deployment**: Cloudflare Pages
- **Domain**: help.shelfieplatform.com

### Integration Requirements
- Must integrate with existing `shelfieplatform.github.io` repository
- Follow existing website patterns and structure
- Use same UI/UX as Privacy Policy and Terms of Service pages
- Maintain consistent styling with gradient backgrounds
- Include language switcher functionality

## Content Structure

### Main Help Center Page (/help-center)
**Purpose**: Landing page with search, categories, and popular articles

**Sections**:
1. **Hero Section**
   - Title: "How can we help you?"
   - Subtitle: "Find answers, get support, and learn how to make the most of Shelfie"
   - Search bar with Algolia integration
   - Search placeholder: "Search help articles..."

2. **Browse by Category** (6 categories)
   - Getting Started
   - Account & Profile  
   - Adding Favorites
   - Privacy & Security
   - Troubleshooting
   - Contact Support

3. **Popular Articles** (3-4 featured articles)
   - Welcome to Shelfie
   - Setting up your profile
   - Adding books to your favorites
   - Privacy settings guide

4. **Contact Support Options**
   - Live Chat (coming soon)
   - Email Support (shelfieplatform@gmail.com)
   - Phone Support (coming soon)

### Category Pages

#### 1. Getting Started (/help-center/getting-started)
**Purpose**: Guide new users through basic platform usage

**Articles**:
- Welcome to Shelfie: Your First Steps
- Creating Your Account
- Setting Up Your Profile
- Understanding Your Dashboard
- Privacy Settings Overview
- Mobile App Download
- Desktop vs Mobile Experience
- Getting Your First Followers
- Following Other Users
- Understanding Notifications
- Basic Security Tips
- Platform Tour

#### 2. Account & Profile (/help-center/account-profile)
**Purpose**: Account management and profile customization

**Articles**:
- How to Change Your Username
- Updating Your Profile Information
- Adding Profile Pictures
- Setting Your Bio
- Managing Connected Accounts
- Account Security Settings
- Two-Factor Authentication Setup
- Password Management
- Account Deactivation
- Data Export
- Account Recovery
- Profile Visibility Settings

#### 3. Adding Favorites (/help-center/adding-favorites)
**Purpose**: Guide users on adding and organizing their favorite content

**Articles**:
- How to Add Books to Your Favorites
- Adding Movies and TV Shows
- Adding Music and Songs
- Importing Your Existing Lists
- Organizing Your Favorites
- Creating Custom Lists
- Sharing Your Favorites
- Finding New Content
- Rating and Reviewing
- Managing Your Collections
- Bulk Import Options
- Favorite Categories

#### 4. Privacy & Security (/help-center/privacy-security)
**Purpose**: Privacy settings and security features

**Articles**:
- Understanding Your Privacy Settings
- Who Can See Your Profile
- Blocking and Reporting Users
- Data Protection and GDPR
- Account Security Best Practices
- Two-Factor Authentication
- Privacy Policy Overview
- Data Sharing Settings
- Third-Party Integrations
- Security Notifications
- Account Recovery Options
- Data Deletion Requests

#### 5. Troubleshooting (/help-center/troubleshooting)
**Purpose**: Common issues and technical problems

**Articles**:
- Login Issues
- App Not Loading
- Upload Problems
- Search Not Working
- Notification Issues
- Performance Problems
- Browser Compatibility
- Mobile App Issues
- Account Access Problems
- Data Sync Issues
- Error Messages
- Contact Technical Support

#### 6. Contact Support (/help-center/contact)
**Purpose**: Direct support and contact options

**Sections**:
- Contact Form
- Email Support (shelfieplatform@gmail.com)
- Live Chat (when available)
- Support Hours
- Response Times
- Escalation Process
- Feedback Submission
- Bug Reports
- Feature Requests
- Community Forums

## Detailed Article Content

### Getting Started Articles

#### Welcome to Shelfie: Your First Steps
**Content**:
- Introduction to Shelfie platform
- What makes Shelfie different
- Key features overview
- Getting started checklist
- First week tips
- Community guidelines
- Success stories

**Shelfie-Specific Context**:
- Explain the "digital shelf" concept - users curate their favorite books, movies, music, TV shows
- Highlight the social aspect - following others to discover new content
- Mention the verification system for celebrities and brands
- Explain the recommendation engine that suggests content based on preferences
- Reference the mobile app and web platform availability
- Mention the import functionality for existing lists from other platforms

#### Creating Your Account
**Content**:
- Account creation process
- Email verification
- Username selection
- Password requirements
- Terms of service acceptance
- Privacy policy acknowledgment
- Account confirmation

**Shelfie-Specific Context**:
- Explain the username system with reserved usernames for celebrities/brands
- Mention the verification badge system for special accounts
- Reference the email verification process using AWS SES
- Explain the privacy settings available during account creation
- Mention the option to connect social media accounts for easier login

#### Setting Up Your Profile
**Content**:
- Profile picture upload
- Bio writing tips
- Interest selection
- Privacy settings
- Profile visibility
- Customization options
- Profile completion checklist

**Shelfie-Specific Context**:
- Explain the profile picture upload to AWS S3
- Mention the bio section for describing your reading/watching preferences
- Reference the interest selection for better content recommendations
- Explain the privacy settings for controlling who sees your shelf and activity
- Mention the profile completion checklist that helps new users get started
- Reference the verification badge display for verified accounts

### Account & Profile Articles

#### How to Change Your Username
**Content**:
- Username change process
- Username requirements
- Availability checking
- Change limitations
- Notification to followers
- URL updates
- Username history

#### Updating Your Profile Information
**Content**:
- Profile editing interface
- Information categories
- Real-time updates
- Privacy considerations
- Verification process
- Change notifications
- Profile completeness

### Adding Favorites Articles

#### How to Add Books to Your Favorites
**Content**:
- Book search functionality
- Manual book addition
- ISBN scanning
- Book information editing
- Rating and reviews
- Reading status
- Book collections

**Shelfie-Specific Context**:
- Explain the Google Books API integration for book search
- Mention ISBN scanning functionality in mobile app
- Reference the reading status options (Want to Read, Currently Reading, Read)
- Explain the rating system (1-5 stars) and written reviews
- Mention the book collections feature for organizing favorites
- Reference the recommendation engine that suggests similar books
- Explain the social aspect - sharing book discoveries with followers

#### Adding Movies and TV Shows
**Content**:
- Movie/TV show search
- Manual addition process
- Episode tracking
- Watch status
- Ratings and reviews
- Collection organization
- Recommendation system

**Shelfie-Specific Context**:
- Explain the TMDb API integration for comprehensive movie/TV database
- Mention the watch status options (Want to Watch, Currently Watching, Watched)
- Reference the episode tracking for TV shows with season management
- Explain the rating system and review functionality
- Mention the collection organization for themed lists (e.g., "Horror Movies")
- Reference the recommendation engine based on viewing history
- Explain the social sharing of movie/TV discoveries

#### Importing Your Existing Lists
**Content**:
- Supported platforms
- Import process
- Data mapping
- Duplicate handling
- Import verification
- Privacy considerations
- Import limitations

**Shelfie-Specific Context**:
- Explain supported platforms: Goodreads, Letterboxd, Spotify playlists, etc.
- Mention the bulk import functionality for large lists
- Reference the data mapping process (ratings, reviews, status)
- Explain the duplicate detection and handling system
- Mention the import verification process to ensure data accuracy
- Reference the privacy considerations for imported data
- Explain the import limitations and supported file formats

### Privacy & Security Articles

#### Understanding Your Privacy Settings
**Content**:
- Privacy levels overview
- Profile visibility options
- Content sharing settings
- Follower/following visibility
- Activity privacy
- Data sharing preferences
- Privacy recommendations

**Shelfie-Specific Context**:
- Explain the profile visibility settings (public, followers only, private)
- Mention the shelf visibility controls (who can see your favorites)
- Reference the activity feed privacy (who can see your updates)
- Explain the follower/following visibility options
- Mention the data sharing preferences for recommendations
- Reference the GDPR compliance and data protection features
- Explain the blocking and reporting functionality

#### Two-Factor Authentication
**Content**:
- 2FA setup process
- Authentication app setup
- Backup codes
- Recovery options
- Security benefits
- Troubleshooting
- Best practices

### Troubleshooting Articles

#### Login Issues
**Content**:
- Common login problems
- Password reset process
- Account recovery
- Browser issues
- Mobile app problems
- Support escalation
- Prevention tips

**Shelfie-Specific Context**:
- Explain the JWT-based authentication system
- Mention the email verification process using AWS SES
- Reference the password reset functionality
- Explain the account recovery process
- Mention the mobile app vs web platform differences
- Reference the support escalation to shelfieplatform@gmail.com
- Explain the prevention tips for account security

#### App Not Loading
**Content**:
- Loading problems
- Browser compatibility
- Cache clearing
- Network issues
- Mobile app issues
- Performance optimization
- Technical support

## Search Implementation

### Algolia DocSearch Setup
**Requirements**:
- Free tier: 10,000 searches/month
- Domain verification: shelfieplatform.com
- Crawler configuration
- Index optimization
- Search analytics
- Result customization

**Search Features**:
- Real-time search
- Autocomplete
- Search suggestions
- Result highlighting
- Category filtering
- Popular searches
- Search analytics

## URL Structure

### Main Help Center URLs
- **Main Help Center**: `/help-center/`
- **Getting Started**: `/help-center/getting-started/`
- **Account & Profile**: `/help-center/account-profile/`
- **Adding Favorites**: `/help-center/adding-favorites/`
- **Privacy & Security**: `/help-center/privacy-security/`
- **Troubleshooting**: `/help-center/troubleshooting/`
- **Contact Support**: `/help-center/contact/`

### Getting Started Article URLs
- **Welcome to Shelfie**: `/help-center/getting-started/welcome/`
- **Creating Your Account**: `/help-center/getting-started/creating-account/`
- **Setting Up Your Profile**: `/help-center/getting-started/setting-up-profile/`
- **Understanding Your Dashboard**: `/help-center/getting-started/dashboard/`
- **Privacy Settings Overview**: `/help-center/getting-started/privacy-settings/`
- **Mobile App Download**: `/help-center/getting-started/mobile-app/`
- **Desktop vs Mobile Experience**: `/help-center/getting-started/desktop-mobile/`
- **Getting Your First Followers**: `/help-center/getting-started/first-followers/`
- **Following Other Users**: `/help-center/getting-started/following-users/`
- **Understanding Notifications**: `/help-center/getting-started/notifications/`
- **Basic Security Tips**: `/help-center/getting-started/security-tips/`
- **Platform Tour**: `/help-center/getting-started/platform-tour/`

### Account & Profile Article URLs
- **How to Change Your Username**: `/help-center/account-profile/change-username/`
- **Updating Your Profile Information**: `/help-center/account-profile/update-profile/`
- **Adding Profile Pictures**: `/help-center/account-profile/profile-pictures/`
- **Setting Your Bio**: `/help-center/account-profile/setting-bio/`
- **Managing Connected Accounts**: `/help-center/account-profile/connected-accounts/`
- **Account Security Settings**: `/help-center/account-profile/security-settings/`
- **Two-Factor Authentication Setup**: `/help-center/account-profile/two-factor-auth/`
- **Password Management**: `/help-center/account-profile/password-management/`
- **Account Deactivation**: `/help-center/account-profile/account-deactivation/`
- **Data Export**: `/help-center/account-profile/data-export/`
- **Account Recovery**: `/help-center/account-profile/account-recovery/`
- **Profile Visibility Settings**: `/help-center/account-profile/profile-visibility/`

### Adding Favorites Article URLs
- **How to Add Books**: `/help-center/adding-favorites/add-books/`
- **Adding Movies and TV Shows**: `/help-center/adding-favorites/add-movies-tv/`
- **Adding Music and Songs**: `/help-center/adding-favorites/add-music/`
- **Importing Your Existing Lists**: `/help-center/adding-favorites/import-lists/`
- **Organizing Your Favorites**: `/help-center/adding-favorites/organize-favorites/`
- **Creating Custom Lists**: `/help-center/adding-favorites/custom-lists/`
- **Sharing Your Favorites**: `/help-center/adding-favorites/share-favorites/`
- **Finding New Content**: `/help-center/adding-favorites/find-content/`
- **Rating and Reviewing**: `/help-center/adding-favorites/rating-reviewing/`
- **Managing Your Collections**: `/help-center/adding-favorites/manage-collections/`
- **Bulk Import Options**: `/help-center/adding-favorites/bulk-import/`
- **Favorite Categories**: `/help-center/adding-favorites/favorite-categories/`

### Privacy & Security Article URLs
- **Understanding Your Privacy Settings**: `/help-center/privacy-security/privacy-settings/`
- **Who Can See Your Profile**: `/help-center/privacy-security/profile-visibility/`
- **Blocking and Reporting Users**: `/help-center/privacy-security/blocking-reporting/`
- **Data Protection and GDPR**: `/help-center/privacy-security/data-protection/`
- **Account Security Best Practices**: `/help-center/privacy-security/security-best-practices/`
- **Two-Factor Authentication**: `/help-center/privacy-security/two-factor-auth/`
- **Privacy Policy Overview**: `/help-center/privacy-security/privacy-policy/`
- **Data Sharing Settings**: `/help-center/privacy-security/data-sharing/`
- **Third-Party Integrations**: `/help-center/privacy-security/third-party-integrations/`
- **Security Notifications**: `/help-center/privacy-security/security-notifications/`
- **Account Recovery Options**: `/help-center/privacy-security/account-recovery/`
- **Data Deletion Requests**: `/help-center/privacy-security/data-deletion/`

### Troubleshooting Article URLs
- **Login Issues**: `/help-center/troubleshooting/login-issues/`
- **App Not Loading**: `/help-center/troubleshooting/app-not-loading/`
- **Upload Problems**: `/help-center/troubleshooting/upload-problems/`
- **Search Not Working**: `/help-center/troubleshooting/search-not-working/`
- **Notification Issues**: `/help-center/troubleshooting/notification-issues/`
- **Performance Problems**: `/help-center/troubleshooting/performance-problems/`
- **Browser Compatibility**: `/help-center/troubleshooting/browser-compatibility/`
- **Mobile App Issues**: `/help-center/troubleshooting/mobile-app-issues/`
- **Account Access Problems**: `/help-center/troubleshooting/account-access/`
- **Data Sync Issues**: `/help-center/troubleshooting/data-sync/`
- **Error Messages**: `/help-center/troubleshooting/error-messages/`
- **Contact Technical Support**: `/help-center/troubleshooting/contact-support/`

## Navigation Structure

### Main Navigation
- Home
- Categories
- Search
- Contact
- Language Switcher

### Category Navigation
- Getting Started
- Account & Profile
- Adding Favorites
- Privacy & Security
- Troubleshooting
- Contact Support

### Article Navigation
- Previous/Next articles
- Related articles
- Breadcrumb navigation
- Table of contents
- Quick links

## Content Guidelines

### Writing Style
- Clear and concise language
- Step-by-step instructions
- Screenshots and examples
- User-friendly terminology
- Consistent formatting
- Accessibility considerations

### Content Requirements
- Each article: 300-800 words
- Clear headings and subheadings
- Bullet points for lists
- Code examples where needed
- Visual aids descriptions
- Related article links

### SEO Considerations
- Keyword optimization
- Meta descriptions
- Structured data
- Internal linking
- URL structure
- Page titles

## Technical Implementation

### File Structure
```
help-center/
├── app/
│   ├── page.tsx (main help center)
│   ├── getting-started/
│   │   ├── page.tsx
│   │   └── welcome/
│   │       └── page.tsx
│   ├── account-profile/
│   │   ├── page.tsx
│   │   └── change-username/
│   │       └── page.tsx
│   ├── adding-favorites/
│   │   ├── page.tsx
│   │   └── add-books/
│   │       └── page.tsx
│   ├── privacy-security/
│   │   ├── page.tsx
│   │   └── two-factor-auth/
│   │       └── page.tsx
│   ├── troubleshooting/
│   │   ├── page.tsx
│   │   └── login-issues/
│   │       └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── SearchBar.tsx
│   ├── CategoryGrid.tsx
│   ├── PopularArticles.tsx
│   ├── ContactSupport.tsx
│   └── ArticleLayout.tsx
└── lib/
    └── algolia.ts
```

### Component Requirements
- Responsive design
- Mobile-first approach
- Accessibility compliance
- Performance optimization
- SEO optimization
- Error handling

## Integration Points

### Existing Website Integration
- Footer link addition
- Navigation menu updates
- Consistent styling
- Language support
- User authentication
- Analytics integration

### External Integrations
- Algolia DocSearch
- Email support system
- Analytics tracking
- Performance monitoring
- Error reporting
- User feedback

## Content Management

### Article Management
- Content versioning
- Update notifications
- Author attribution
- Review process
- Publication workflow
- Archive management

### Search Optimization
- Content indexing
- Search result optimization
- Popular content tracking
- Search analytics
- User behavior analysis
- Content recommendations

## Success Metrics

### User Engagement
- Page views
- Search queries
- Article completion rates
- User satisfaction
- Support ticket reduction
- Time on page

### Technical Performance
- Page load speed
- Search response time
- Mobile performance
- Accessibility scores
- SEO rankings
- Error rates

## Maintenance Requirements

### Content Updates
- Regular content reviews
- User feedback integration
- Platform updates
- Feature announcements
- Bug fix documentation
- FAQ updates

### Technical Maintenance
- Search index updates
- Performance monitoring
- Security updates
- Analytics review
- User testing
- Continuous improvement

## Implementation Timeline

### Phase 1: Foundation
- Basic structure setup
- Main help center page
- Category pages
- Basic search integration

### Phase 2: Content
- Article creation
- Content optimization
- Search implementation
- User testing

### Phase 3: Enhancement
- Advanced features
- Analytics integration
- Performance optimization
- User feedback implementation

### Phase 4: Maintenance
- Content updates
- Performance monitoring
- User support
- Continuous improvement

## Quality Assurance

### Content Quality
- Accuracy verification
- User testing
- Accessibility testing
- Mobile testing
- Cross-browser testing
- Performance testing

### Technical Quality
- Code review
- Security testing
- Performance optimization
- SEO optimization
- Analytics implementation
- Error monitoring

## Technical Infrastructure Context

### Backend Architecture
- **Server**: Node.js/Express API running on AWS EC2 (t3.micro instance)
- **Database**: MongoDB Atlas (M0 free tier) with IP whitelisting
- **Authentication**: JWT tokens with email verification via AWS SES
- **File Storage**: AWS S3 for profile pictures and content images
- **CDN**: CloudFlare for global content delivery and DDoS protection
- **Real-time**: Socket.io for live notifications and messaging
- **Email Service**: AWS SES for transactional emails and notifications

### Common Technical Issues
- **API Rate Limits**: TMDb, Google Books, Spotify API rate limiting
- **Database Connection**: MongoDB Atlas connection issues
- **File Upload**: AWS S3 upload failures
- **Email Delivery**: AWS SES email delivery issues
- **Real-time Features**: Socket.io connection problems
- **Mobile App**: iOS/Android specific issues
- **Browser Compatibility**: Cross-browser functionality

### Platform-Specific Troubleshooting
- **Content Search**: API integration failures (TMDb, Google Books, Spotify)
- **Import Issues**: Bulk import failures and data mapping problems
- **Recommendation Engine**: AI recommendation system issues
- **Social Features**: Following/follower system problems
- **Verification System**: Badge verification process issues
- **Admin Panel**: Content moderation and user management problems

## Content Writing Guidelines

### Tone and Style
- **Friendly and Approachable**: Use conversational tone
- **Clear and Concise**: Avoid technical jargon when possible
- **Step-by-Step**: Provide clear, numbered instructions
- **Visual Aids**: Reference screenshots and examples
- **User-Focused**: Write from user's perspective

### Shelfie-Specific Language
- Use "shelf" instead of "collection" or "list"
- Refer to "favorites" as items added to shelf
- Use "following" and "followers" consistently
- Reference "verification badges" for special accounts
- Mention "recommendation engine" for AI suggestions
- Use "activity feed" for timeline updates

### Common User Scenarios
- **New User**: First-time setup and basic features
- **Power User**: Advanced features and customization
- **Content Creator**: Sharing and community features
- **Mobile User**: App-specific functionality
- **Privacy-Conscious**: Security and privacy settings
- **Social User**: Following and community features

This comprehensive specification provides all the necessary details for implementing a complete help center system for Shelfie, including content structure, technical requirements, and implementation guidelines.
