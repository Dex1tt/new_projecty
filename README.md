# new_projecty

Project workspace. Application stack and features will be chosen with the first task.

## Development workflow

- Keep main stable; use feat/* and fix/* branches for changes.
- Review the diff and run relevant checks before committing.
- Commit meaningful steps with clear messages.
- Push completed changes and use pull requests for review.
- Mark releases with version tags when an application is ready.

## Local configuration

Keep secrets in .env files. Commit only .env.example with placeholder values.
Dependencies, build output and local secrets are excluded through .gitignore.
