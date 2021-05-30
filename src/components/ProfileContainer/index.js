import React                    from 'react';
import styles                   from './styles.module.scss';
import classNames               from 'classnames';
import { getProfilePictureUrl } from '../../helper/ProfilePicture';
import _                        from 'lodash';

const ProfileContainer = ({ className, user }) => {
    const getProfileStyle = () => {
        const profilePicture = getProfilePictureUrl(_.get(user, 'profilePicture'));

        return {
            backgroundImage: 'url("' + profilePicture + '")',
        };
    };

    return (
        <div
            className={classNames(
                styles.profileContainer,
                className,
            )}
        >
            <div
                className={styles.profilePicture}
                style={getProfileStyle()}
            >
            </div>
            <span className={styles.profileName}>
                {_.get(user, 'name')}
            </span>
        </div>
    );
};

export default ProfileContainer;