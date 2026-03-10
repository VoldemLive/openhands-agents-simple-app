---
name: pr-format
description: This skill should be used when the user asks to "create a PR", "open a pull request", "submit PR", "make a pull request", or any variation of creating/opening pull requests. Provides a standardized PR template with type of changes, description, related issues, before/after screenshots, acceptance criteria, and testing steps.
---

# PR Format Skill

This skill provides a standardized pull request template for consistent, high-quality PR descriptions.

## When to Use

Apply this template when creating any pull request. The template ensures all necessary information is included for reviewers.

## PR Template

When creating a pull request, use this exact template format:

```markdown
## Type of Changes

<!-- Put an `✓` for the applicable box: -->

|     | Type                       |
| --- | -------------------------- |
|     | :bug: Bug fix              |
|     | :sparkles: New feature     |
|     | :hammer: Refactoring       |
|     | :100: Add tests            |
|     | :link: Update dependencies |
|     | :scroll: Docs              |

## Description

<!-- What does this code change? Why did I choose this approach? Did I learn anything worth sharing? -->

## Related Issue

<!-- If you write "closes" followed by the Github issue number, it will automatically close the issue for you when the PR merges -->

## Updates

### Before

<!-- If UI feature, provide screenshots -->

### After

<!-- If UI feature, provide screenshots -->

## Acceptance Criteria

<!-- Include AC from the Github issue -->

## Testing Steps / QA Criteria

<!-- Provide steps the other team members and mentors need to follow to properly test your additions. -->
```

## Filling Out the Template

### Type of Changes

Mark the appropriate type with `✓`:
- **:bug: Bug fix** - Fixes a bug or issue
- **:sparkles: New feature** - Adds new functionality
- **:hammer: Refactoring** - Code restructuring without changing behavior
- **:100: Add tests** - Adds or improves tests
- **:link: Update dependencies** - Updates packages or dependencies
- **:scroll: Docs** - Documentation changes only

Multiple types can be marked if applicable.

### Description

Include:
- What the code changes accomplish
- The reasoning behind the chosen approach
- Any interesting learnings or decisions worth sharing
- Technical details relevant to reviewers

### Related Issue

Format: `Closes #123` or `Fixes #123` to auto-close the issue on merge.
If no related issue exists, write "N/A" or describe the motivation.

### Updates (Before/After)

For UI changes:
- Include screenshots or GIFs showing the before state
- Include screenshots or GIFs showing the after state
- For non-UI changes, write "N/A" or describe the behavioral change

### Acceptance Criteria

Copy acceptance criteria from the related GitHub issue, or define:
- What conditions must be met for this PR to be considered complete
- Specific functionality that must work

### Testing Steps / QA Criteria

Provide clear, numbered steps:
1. How to set up the test environment
2. Specific actions to perform
3. Expected results to verify
4. Edge cases to check

## Example Completed PR

```markdown
## Type of Changes

|     | Type                       |
| --- | -------------------------- |
|     | :bug: Bug fix              |
| ✓   | :sparkles: New feature     |
|     | :hammer: Refactoring       |
|     | :100: Add tests            |
|     | :link: Update dependencies |
|     | :scroll: Docs              |

## Description

Added user authentication with JWT tokens. Chose JWT over session-based auth for better scalability and stateless API design. Implemented refresh token rotation for enhanced security.

## Related Issue

Closes #42

## Updates

### Before

N/A - New feature

### After

![Login Form](screenshot-login.png)

## Acceptance Criteria

- [ ] Users can register with email and password
- [ ] Users can log in and receive JWT token
- [ ] Protected routes require valid token
- [ ] Tokens expire after 15 minutes

## Testing Steps / QA Criteria

1. Run `npm install` to install dependencies
2. Start the server with `npm run dev`
3. Navigate to `/register` and create a new account
4. Log in with the created credentials
5. Verify the JWT token is stored in localStorage
6. Access a protected route and verify it works
7. Wait 15 minutes and verify token expiration handling
```
